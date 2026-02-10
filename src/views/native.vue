<template>
    <el-form :model="form" label-width="80px">
        <el-form-item v-for="(value, key) in form" :key="key" :label="key">
            <el-radio-group v-model="form[key]">
                <el-radio value="A">选项</el-radio>
                <el-radio value="B">选项</el-radio>
            </el-radio-group>
        </el-form-item>
    </el-form>
    <el-button type="primary" @click="onSubmit">Submit</el-button>
    <el-table :data="data">
        <el-table-column type="index" label="ID"></el-table-column>
        <el-table-column v-for="(value, key, index) in form" :key="key" :prop="key" :label="key"></el-table-column>
    </el-table>
    <h3>统计结果 (A/B 选择占比)</h3>
    <el-table :data="statistics" style="margin-top: 20px;">
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
        <el-table-column prop="total" label="总人数"></el-table-column>
    </el-table>
</template>
<script setup>
import { reactive, ref, computed} from 'vue'

const data = ref([])
const initialForm = {
    q1: '',
    q2: '',
    q3: '',
};
const form = reactive({ ...initialForm });

const statistics = computed(() => {
    if (data.value.length === 0) {
        return [];
    }

    // 获取所有问题的键名
    const questions = Object.keys(initialForm);
    const stats = [];

    // 为每个问题计算统计信息
    questions.forEach(question => {
        let aCount = 0;
        let bCount = 0;

        // 遍历所有提交的数据
        data.value.forEach(item => {
            if (item[question] === 'A') {
                aCount++;
            } else if (item[question] === 'B') {
                bCount++;
            }
        });

        const totalCount = aCount + bCount;
        const aPercentage = totalCount > 0 ? ((aCount / totalCount) * 100).toFixed(1) : 0;
        const bPercentage = totalCount > 0 ? ((bCount / totalCount) * 100).toFixed(1) : 0;

        stats.push({
            question: question,
            aPercentage: parseFloat(aPercentage),
            bPercentage: parseFloat(bPercentage),
            total: totalCount
        });
    });

    return stats;
});
const onSubmit = () => {
    const hasValidValue = Object.values(form).some(value => value === 'A' || value === 'B');
    if (!hasValidValue) {
        alert('请至少选择一个问题的答案');
        return;
    }
    data.value.push(JSON.parse(JSON.stringify(form)))
    Object.assign(form, initialForm);
    console.log(data.value)
}
</script>