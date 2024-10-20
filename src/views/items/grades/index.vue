<template>
  <h1 class="title"></h1>
  <h1 class="tlt">登分器</h1>
  <el-dialog v-model="showResult">
    <div class="result">
      <el-result title="Please wait" sub-title="We're preparing your result.But you can close this dialog.">
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
          <el-checkbox v-model="isFullPerson" @click="CheckToCalculateGroupAverages" label="是否去除未考式人员" />
        </div>
        <div class="info">
          <el-input-number :min="1" :max="63" class="item" v-model="inputNumber" size="large" placeholder="学号" />
          <h2 class="item">当前学生：{{ findStudentByNumber(inputNumber) }}</h2>
          <el-input-number :min="0" class="item" v-model="grade" size="large" placeholder="分数"
            @keyup.enter="handleInput" />
        </div>
      </div>
      <div class="avgChart">
        <el-table :data="group" border>
          <el-table-column prop="id" label="组别"></el-table-column>
          <el-table-column prop="averageGrade" label="平均分"></el-table-column>
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
import { ElDialog } from "element-plus";
import _ from "lodash";
import { members as classData, groups, members } from "@/components/data";
import * as XLSX from "xlsx";

export default {
  setup() {
    const group = reactive(groups)
    const showResult = ref(false);
    const data = reactive(classData); //原数组
    const inputNumber = ref(null); //学号（输入值）
    const grade = ref(undefined); //分数（输入值）
    const isFullPerson = ref(false); //是否开启‘去除未考式人员’
    const isHasBeenClose = ref(false);

    function test() {
      exportToExcel(group, "6.xlsx")
    }
    /**
     * 获取学号对应的姓名，并显示
     */

    function findStudentByNumber(index: number = 0) {
      const student = (data.find(member => member.num === index) || { name: "（键入正确学号以检索学生）" }).name;

      return student;
    }
    /**
     * 将输入的分数添加到原分数数组中
     */
    function handleInput() {
      if (grade.value && grade.value >= 0) {
        data.find(member => member.num === inputNumber.value).grade = grade.value;
        grade.value = undefined;
        inputNumber.value = undefined;
        computedTeamGrade();
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
      showResult.value = true;
      setTimeout(() => {
        exportToExcel()
        showResult.value = false;
      }, 3000);
    }
    /**
     * 计算每组成绩的平均分，若最后不足七个则按剩余数量计算平均数。
     *TODO:
     * @param {Array} scores 原始成绩数组。
     * @returns {Array} 返回一个包含每组成绩平均分的数组。
     */
    function computedTeamGrade(): void {
      // 遍历每个组，并计算均分，然后添加到组对象上
      group.forEach(group => {
        const totalGrade = group.members.reduce((acc, member) => acc + member.grade, 0);
        const averageGrade = group.members.length > 0 ? totalGrade / group.members.length : 0;
        // 在组对象上添加一个新的属性来存储均分
        group.averageGrade = averageGrade;
      });
    }

    function CheckToCalculateGroupAverages() {

    }
    const flattenedData = group.reduce((acc, group) => {
      group.members.forEach(member => {
        acc.push({
          'Group Name': group.name,
          'Member Name': member.name,
          'Member Grade': member.grade,
          'Average Grade': group.averageGrade
        });
      });
      return acc;
    }, []);
    function exportToExcel(data = group, fileName = "result.xlsx") {
      // 创建一个新的工作簿
      const wb = XLSX.utils.book_new();

      // 将数据转换为工作表
      const ws = XLSX.utils.json_to_sheet(data);

      // 将工作表添加到工作簿中
      XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');

      // 将工作簿写入文件
      XLSX.writeFile(wb, fileName);
    }





    // 返回需要暴露给模板的数据和方法
    return {
      group,
      findStudentByNumber,
      showResult,
      test,
      data,
      isFullPerson,
      inputNumber,
      grade,
      handleInput,
      handleInputToExpert,
      CheckToCalculateGroupAverages,
    };
  },
};
</script>
