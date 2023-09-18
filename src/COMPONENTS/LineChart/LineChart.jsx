import { LineChart as LChart, Line,XAxis,YAxis } from 'recharts';

const LineChart = () => {

const StudentMathMark = [
        { "id": 1, "name": "Student 1", "mathMarks": 80 },
        { "id": 2, "name": "Student 2", "mathMarks": 85 },
        { "id": 3, "name": "Student 3", "mathMarks": 90 },
        { "id": 4, "name": "Student 4", "mathMarks": 78 },
        { "id": 5, "name": "Student 5", "mathMarks": 92 },
        { "id": 6, "name": "Student 6", "mathMarks": 88 },
        { "id": 7, "name": "Student 7", "mathMarks": 83 },
        { "id": 8, "name": "Student 8", "mathMarks": 79 },
        { "id": 9, "name": "Student 9", "mathMarks": 87 },
        { "id": 10, "name": "Student 10", "mathMarks": 91 }
      ]

    return (
        <div>
            <LChart width={500} height={400} data={StudentMathMark}>
              <Line dataKey="mathMarks"></Line>
              <Line dataKey="id"></Line>
              <XAxis dataKey='name'></XAxis>
              <YAxis dataKey='mathMarks'></YAxis>
              </LChart>
        </div>
    );
};

export default LineChart;