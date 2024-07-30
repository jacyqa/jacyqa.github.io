<template>
  <h1 class="title"></h1>
  <h1 class="tlt">登分器</h1>
  <el-dialog v-model="showResult">
    <div class="result">
      <el-result title="Please wait" sub-title="We're preparing your result">
        <template #icon>
          <el-progress
            type="circle"
            :status="stautsOfProgrss"
            :percentage="parseInt(progress.progress * 100)"
          />
        </template>
        <template #extra>
          <el-button
            type="primary"
            @click="
              showResult = false;
              progress.progress = 0;
            "
            >Back</el-button
          >
        </template>
      </el-result>
    </div>
  </el-dialog>
  <main>
    <div class="head">
      <div class="methed">
        <div class="nextButton">
          <el-button @click="handleInput">Next</el-button>
          <el-button @click="handleInputToExpert">导出</el-button>
          <el-button @click="test">test</el-button>
          <el-checkbox
            v-model="isFullPerson"
            @click="CheckToCalculateGroupAverages"
            label="是否去除未考式人员"
          />
        </div>
        <div class="info">
          <el-input-number
            :min="1"
            :max="63"
            class="item"
            v-model="inputNumber"
            size="large"
            placeholder="学号"
            @change="fetchinputNumber"
          />
          <h2 class="item">当前学生：{{ showName }}</h2>
          <el-input-number
            :min="0"
            class="item"
            v-model="grade"
            size="large"
            placeholder="分数"
            @keyup.enter="handleInput"
          />
        </div>
      </div>
      <div class="avgChart">
        <el-table :data="teamGrades" border>
          <el-table-column prop="team" label="组别"></el-table-column>
          <el-table-column prop="avgGrade" label="平均分"></el-table-column>
        </el-table>
      </div>
    </div>
    <div class="chart">
      <el-table :data="data" height="500" border style="width: 100%">
        <el-table-column prop="num" label="学号"></el-table-column>
        <el-table-column prop="name" label="姓名"></el-table-column>
        <el-table-column prop="grade" label="成绩"></el-table-column>
      </el-table>
    </div>
  </main>
</template>

<style scoped src="./index.css"></style>

<script lang="ts">
//@ts-nocheck
import { ElProgress } from "element-plus";
import fakeProgress from "fake-progress";
import _ from "lodash";
import { data as classData } from "@/components/data";
import { utils, writeFileXLSX } from "xlsx";

export default {
  setup() {
    const stautsOfProgrss = ref("");
    const showResult = ref(false);
    const data = reactive(classData); //原数组
    const index = ref(0); //原数组索引
    const inputNumber = ref(undefined); //学号（输入值）
    const showName = ref(""); //姓名
    const grade = ref(undefined); //分数（输入值）
    const teamGrades = ref<any>([]); //每组平均分
    const isFullPerson = ref(false); //是否开启‘去除未考式人员’
    const progress = reactive(
      new fakeProgress({
        timeConstant: 5000, //timeConstant相当于分母，分母越大则加的越少
      }),
    );

    function test() {
      // progress.start();
      // progress.end()
    }
    /**
     * 通过将学号减一的方式获取正确数组的索引
     */
    function fetchinputNumber() {
      index.value = (inputNumber.value || 0) - 1;
      fatchname(index.value);
    }
    /**
     * 获取学号对应的姓名，并显示
     */

    function fatchname(index: number) {
      showName.value = data[index].name;
      console.dir(data.map((item) => item.grade));
    }
    /**
     * 将输入的分数添加到原分数数组中
     */
    function handleInput() {
      if (grade.value && grade.value >= 0) {
        data[index.value].grade = grade.value;
        grade.value = undefined;
        inputNumber.value = undefined;
        showName.value = "";
        teamGrades.value = computedTeamGrade(data.map((item) => item.grade));
      } else {
        alert("成绩或学号输入有误");
      }
    }

    /**
     * 将输入的分数添加到原分数数组中
     * TODO:
     */
    function handleInputToExpert() {
      grade.value = undefined;
      inputNumber.value = undefined;
      showName.value = "";
      stautsOfProgrss.value = "";
      showResult.value = true;
      progress.start();
      setTimeout(() => {
        progress.end();
        setTimeout(() => {
          stautsOfProgrss.value = "success";
        }, 500);
        teamGrades.value = computedTeamGrade(data.map((item) => item.grade));
        exportResult();
      }, 3000);
    }
    /**
     * 计算每组成绩的平均分，若最后不足七个则按剩余数量计算平均数。
     *TODO:
     * @param {Array} scores 原始成绩数组。
     * @returns {Array} 返回一个包含每组成绩平均分的数组。
     */
    const computedTeamGrade = (scores: Array<number>): Array<number> => {
      let a = 1;
      const chunkArray = _.chunk(scores, 7);
      if (!isFullPerson.value) {
        const avgScores = chunkArray.map((chunk: Array<number>) => {
          const sum = _.sum(chunk);
          return sum / chunk.length;
        });
        console.log(`output->`, avgScores);
        //@ts-ignore
        return avgScores.map((item: number) => {
          return {
            team: `第${a++}组`,
            avgGrade: item,
          };
        });
      } else {
        const avgScores = chunkArray.map((chunk: Array<number>) => {
          const sum = _.sum(chunk);
          return sum / _.compact(chunk).length;
        });
        const shakedArray = _.map(avgScores, (item: number) =>
          _.toInteger(item),
        );
        console.log(`output->`, shakedArray);
        //@ts-ignore
        return shakedArray.map((item: number) => {
          return {
            team: `第${a++}组`,
            avgGrade: item,
          };
        });
      }
    };

    function CheckToCalculateGroupAverages() {
      setTimeout(() => {
        teamGrades.value = computedTeamGrade(data.map((item) => item.grade));
      }, 0);
      console.log(`output->`, teamGrades.value);
    }

    /**
     * 完结使用
     * 导出结果并下载
     */
    function exportResult() {
      data
        .map((item) => item.grade)
        .forEach((number, index) => {
          data[index].grade = number;
        });
      addTeamGrade();
    }
    /**
     * 将小组平均分合并入成绩数组
     */

    function addTeamGrade() {
      const newArray: finalArray[] = [];
      let team = 1;
      let avgIndex = 0;

      data.forEach((item, index) => {
        newArray.push(item);

        if ((index + 1) % 7 === 0) {
          newArray.push({
            num: `均分`,
            name: `第${team++}组`,
            grade: `平均分${teamGrades.value[avgIndex++]["avgGrade"].toFixed(2)}`,
          });
        }
      });
      exportFile(newArray);
    }
    interface studentAndTeamInfo {
      num: number | string;
      name: string;
      grade: number | string;
    }
    type finalArray = studentAndTeamInfo;
    function exportFile(src: finalArray[]) {
      /* generate worksheet from state */
      const ws = utils.json_to_sheet(src);
      /* create workbook and append worksheet */
      const wb = utils.book_new();
      utils.book_append_sheet(wb, ws, "Data");
      /* export to XLSX */
      writeFileXLSX(wb, "result.xlsx");
    }

    // 返回需要暴露给模板的数据和方法
    return {
      stautsOfProgrss,
      progress,
      showResult,
      test,
      teamGrades,
      data,
      isFullPerson,
      inputNumber,
      showName,
      grade,
      index,
      fetchinputNumber,
      handleInput,
      handleInputToExpert,
      CheckToCalculateGroupAverages,
      exportResult,
    };
  },
};
</script>
