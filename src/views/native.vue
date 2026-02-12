<template>
    <el-form :model="form" label-width='auto'>
        <el-form-item v-for="(value, key) in form" :key="key" :label="key">
            <!-- 判断是否为多选题 -->
            <template v-if="isMultipleChoice(key)">
                <el-checkbox-group v-model="form[key]">
                    <el-checkbox 
                        v-for="option in getOptions(key)" 
                        :key="option.value" 
                        :value="option.value"
                    >
                        {{ option.label }}
                    </el-checkbox>
                </el-checkbox-group>
            </template>
            <template v-else>
                <el-radio-group v-model="form[key]">
                    <el-radio 
                        v-for="option in getOptions(key)" 
                        :key="option.value" 
                        :value="option.value"
                    >
                        {{ option.label }}
                    </el-radio>
                </el-radio-group>
            </template>
        </el-form-item>
    </el-form>
    <div style="margin-bottom: 20px;">
        <el-button type="primary" @click="onSubmit">Submit</el-button>
        <el-button type="danger" @click="clearData" style="margin-left: 10px;">清除数据</el-button>
    </div>
    <el-table :data="data" style="width: auto">
        <el-table-column type="index" label="ID"></el-table-column>
        <el-table-column v-for="(value, key, index) in form" :key="key" :prop="key" :label="key"></el-table-column>
    </el-table>
    <h3>统计结果 (A/B/C/D 选择占比)</h3>
    <el-table :data="statistics" style="margin-top: 20px; width: auto">
        <el-table-column prop="question" label="问题"></el-table-column>
        <el-table-column prop="aPercentage" label="A选项占比">
            <template #default="scope">
                {{ scope.row.aPercentage }}%
            </template>
        </el-table-column>
        <el-table-column prop="bPercentage" label="B选项占比">
            <template #default="scope">
                {{ scope.row.bPercentage }}%
            </template>
        </el-table-column>
        <el-table-column prop="cPercentage" label="C选项占比">
            <template #default="scope">
                {{ scope.row.cPercentage }}%
            </template>
        </el-table-column>
        <el-table-column prop="dPercentage" label="D选项占比">
            <template #default="scope">
                {{ scope.row.dPercentage }}%
            </template>
        </el-table-column>
        <el-table-column prop="total" label="总人数"></el-table-column>
    </el-table>
    <el-button type="primary" @click="exportFile">导出</el-button>
</template>
<script setup>
import { reactive, ref, computed, onMounted } from 'vue'
import { nativeQuestionType, nativeQuestion, nativeQuestionOptions } from './question';


const STORAGE_KEY = 'questionnaire_data';
const data = ref([])
// 定义问题类型：true表示多选，false表示单选
const questionTypes = nativeQuestionType;
const initialForm = nativeQuestion;
const form = reactive({ ...initialForm });

// 获取问题的选项
const getOptions = (questionKey) => {
    return nativeQuestionOptions[questionKey] || [
        { value: 'A', label: '选项A' },
        { value: 'B', label: '选项B' },
        { value: 'C', label: '选项C' },
        { value: 'D', label: '选项D' }
    ];
};

// 判断是否为多选题
const isMultipleChoice = (key) => {
    return questionTypes[key] === true;
};

// 从 localStorage 加载数据
const loadDataFromStorage = () => {
    try {
        const storedData = localStorage.getItem(STORAGE_KEY);
        if (storedData) {
            data.value = JSON.parse(storedData);
        }
    } catch (error) {
        console.error('Failed to load data from localStorage:', error);
        data.value = [];
    }
};

// 保存数据到 localStorage
const saveDataToStorage = () => {
    try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(data.value));
    } catch (error) {
        console.error('Failed to save data to localStorage:', error);
    }
};

const statistics = computed(() => {
    if (data.value.length === 0) {
        return [];
    }

    // 获取所有问题的键名
    const questions = Object.keys(initialForm);
    const stats = [];
    const options = ['A', 'B', 'C', 'D'];

    // 为每个问题计算统计信息
    questions.forEach(question => {
        const counts = { A: 0, B: 0, C: 0, D: 0 };
        const totalCount = data.value.length;

        // 遍历所有提交的数据
        data.value.forEach(item => {
            const answer = item[question];

            if (isMultipleChoice(question)) {
                // 多选题处理
                if (Array.isArray(answer)) {
                    options.forEach(option => {
                        if (answer.includes(option)) {
                            counts[option]++;
                        }
                    });
                }
            } else {
                // 单选题处理
                if (answer && options.includes(answer)) {
                    counts[answer]++;
                }
            }
        });

        const percentages = {};
        options.forEach(option => {
            percentages[`${option.toLowerCase()}Percentage`] = totalCount > 0 ?
                parseFloat(((counts[option] / totalCount) * 100).toFixed(1)) : 0;
        });

        stats.push({
            question: question,
            aPercentage: percentages.aPercentage,
            bPercentage: percentages.bPercentage,
            cPercentage: percentages.cPercentage,
            dPercentage: percentages.dPercentage,
            total: totalCount,
            isMultiple: isMultipleChoice(question)
        });
    });

    return stats;
});
const onSubmit = () => {
    let hasValidValue = false;

    // 检查是否有有效答案
    Object.keys(form).forEach(key => {
        if (isMultipleChoice(key)) {
            // 多选题：检查数组是否非空且只包含有效选项
            if (form[key] && form[key].length > 0) {
                // 获取该问题的有效选项值
                const validOptionValues = getOptions(key).map(opt => opt.value);
                const validOptions = form[key].every(option => validOptionValues.includes(option));
                if (validOptions) {
                    hasValidValue = true;
                }
            }
        } else {
            // 单选题：检查是否有有效选项中的一个
            const validOptionValues = getOptions(key).map(opt => opt.value);
            if (validOptionValues.includes(form[key])) {
                hasValidValue = true;
            }
        }
    });

    if (!hasValidValue) {
        alert('请至少选择一个问题的答案');
        return;
    }

    // 深拷贝表单数据
    const formData = {};
    Object.keys(form).forEach(key => {
        if (isMultipleChoice(key)) {
            formData[key] = [...form[key]]; // 复制数组
        } else {
            formData[key] = form[key];
        }
    });

    data.value.push(formData);
    saveDataToStorage(); // 保存到 localStorage

    // 重置表单
    Object.keys(form).forEach(key => {
        if (isMultipleChoice(key)) {
            form[key] = [];
        } else {
            form[key] = '';
        }
    });

    console.log(data.value);
};

const clearData = () => {
    if (confirm('确定要清除所有统计数据吗？此操作不可恢复。')) {
        data.value = [];
        saveDataToStorage(); // 清空 localStorage
    }
};

// 组件挂载时加载数据
onMounted(() => {
    loadDataFromStorage();
});

//TODO
const exportFile = () => {

}
</script>
<style scoped>
.question-type-indicator {
    font-size: 12px;
    color: #666;
    margin-bottom: 8px;
}
</style>