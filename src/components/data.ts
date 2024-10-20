type ValidId = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
type sex = "男" | "女";
interface Member {
  num: number;
  name: string;
  grade: number;
  sex: sex;
}

// 定义组类型
interface Group {
  id: ValidId;
  name: string;
  members: Member[];
}

export const groups: Group[] = [
  {
    id: 1,
    name: "Group1",
    members: [
      {
        num: 1,
        name: "马佐涵",
        grade: 0,
        sex: "女",
      },
      {
        num: 2,
        name: "张潇予",
        grade: 0,
        sex: "女",
      },
      {
        num: 42,
        name: "姚思明",
        grade: 0,
        sex: "男",
      },
      {
        num: 34,
        name: "何易",
        grade: 0,
        sex: "男",
      },
      {
        num: 57,
        name: "王欣竹",
        grade: 0,
        sex: "女",
      },
      {
        num: 6,
        name: "王梦佳",
        grade: 0,
        sex: "女",
      },
      {
        num: 63,
        name: "王星程",
        grade: 0,
        sex: "男",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 2,
    name: "Group2",
    members: [
      {
        num: 8,
        name: "刘博凌",
        grade: 0,
        sex: "男",
      },

      {
        num: 9,
        name: "丁宜冰",
        grade: 0,
        sex: "男",
      },
      {
        num: 17,
        name: "贾济玮",
        grade: 0,
        sex: "男",
      },
      {
        num: 26,
        name: "李婧璇",
        grade: 0,
        sex: "女",
      },
      {
        num: 49,
        name: "李俊霖",
        grade: 0,
        sex: "男",
      },
      {
        num: 13,
        name: "孟令瑶",
        grade: 0,
        sex: "女",
      },
      {
        num: 39,
        name: "张洪睿",
        grade: 0,
        sex: "男",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 3,
    name: "Group3",
    members: [
      {
        num: 15,
        name: "赵轩毅",
        grade: 0,
        sex: "男",
      },
      {
        num: 52,
        name: "杨祺",
        grade: 0,
        sex: "男",
      },
      {
        num: 27,
        name: "王军",
        grade: 0,
        sex: "男",
      },
      {
        num: 19,
        name: "李芷漩",
        grade: 0,
        sex: "女",
      },
      {
        num: 32,
        name: "燕禛",
        grade: 0,
        sex: "男",
      },
      {
        num: 7,
        name: "王子阳",
        grade: 0,
        sex: "男",
      },
      {
        num: 33,
        name: "李卿",
        grade: 0,
        sex: "男",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 4,
    name: "Group4",
    members: [
      {
        num: 5,
        name: "翟雅荣",
        grade: 0,
        sex: "女",
      },
      {
        num: 21,
        name: "张智博",
        grade: 0,
        sex: "男",
      },
      {
        num: 22,
        name: "刘舜华",
        grade: 0,
        sex: "女",
      },
      {
        num: 25,
        name: "陈姝贝",
        grade: 0,
        sex: "女",
      },
      {
        num: 30,
        name: "郝欣雨",
        grade: 0,
        sex: "女",
      },
      {
        num: 40,
        name: "薛星戈",
        grade: 0,
        sex: "女",
      },
      {
        num: 47,
        name: "韩林荣轩",
        grade: 0,
        sex: "男",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 5,
    name: "Group5",
    members: [
      {
        num: 4,
        name: "丁玺腾",
        grade: 0,
        sex: "男",
      },
      {
        num: 10,
        name: "张星辰",
        grade: 0,
        sex: "男",
      },
      {
        num: 14,
        name: "韩瑜章",
        grade: 0,
        sex: "男",
      },
      {
        num: 18,
        name: "赵泽寰",
        grade: 0,
        sex: "男",
      },
      {
        num: 24,
        name: "曹华亭",
        grade: 0,
        sex: "女",
      },
      {
        num: 48,
        name: "李昱萱",
        grade: 0,
        sex: "女",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 6,
    name: "Group6",
    members: [
      {
        num: 11,
        name: "薛奕洋",
        grade: 0,
        sex: "女",
      },
      {
        num: 20,
        name: "谢易娜",
        grade: 0,
        sex: "女",
      },
      {
        num: 31,
        name: "周兴",
        grade: 0,
        sex: "女",
      },
      {
        num: 38,
        name: "吉星霖",
        grade: 0,
        sex: "女",
      },
      {
        num: 44,
        name: "王紫涵",
        grade: 0,
        sex: "女",
      },
      {
        num: 51,
        name: "武韵涵",
        grade: 0,
        sex: "女",
      },
      {
        num: 62,
        name: "杨紫煜",
        grade: 0,
        sex: "女",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 7,
    name: "Group7",
    members: [
      {
        num: 12,
        name: "张灵桥",
        grade: 0,
        sex: "女",
      },
      {
        num: 16,
        name: "王峥",
        grade: 0,
        sex: "男",
      },
      {
        num: 35,
        name: "王子涵",
        grade: 0,
        sex: "女",
      },
      {
        num: 43,
        name: "张馨月",
        grade: 0,
        sex: "女",
      },
      {
        num: 46,
        name: "屈睿东",
        grade: 0,
        sex: "男",
      },
      {
        num: 56,
        name: "段旻岑",
        grade: 0,
        sex: "女",
      },
      {
        num: 60,
        name: "张楷浩",
        grade: 0,
        sex: "男",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 8,
    name: "Group8",
    members: [
      {
        num: 28,
        name: "常雨馨",
        grade: 0,
        sex: "女",
      },
      {
        num: 41,
        name: "索嘉澳",
        grade: 0,
        sex: "男",
      },
      {
        num: 50,
        name: "昝瑛畦",
        grade: 0,
        sex: "男",
      },
      {
        num: 54,
        name: "林轩",
        grade: 0,
        sex: "男",
      },
      {
        num: 55,
        name: "尹婧琦",
        grade: 0,
        sex: "女",
      },
      {
        num: 58,
        name: "段京辰",
        grade: 0,
        sex: "男",
      },
      {
        num: 59,
        name: "王荣美",
        grade: 0,
        sex: "女",
      },
    ],
  },
  /////////////////////////////////////////////////////////
  {
    id: 9,
    name: "Group9",
    members: [
      {
        num: 3,
        name: "杨子睿",
        grade: 0,
        sex: "男",
      },
      {
        num: 23,
        name: "马翔",
        grade: 0,
        sex: "男",
      },
      {
        num: 36,
        name: "宋忻豫",
        grade: 0,
        sex: "女",
      },
      {
        num: 37,
        name: "田谨赫",
        grade: 0,
        sex: "男",
      },
      {
        num: 45,
        name: "魏兆骏",
        grade: 0,
        sex: "男",
      },
      {
        num: 53,
        name: "么雨忱",
        grade: 0,
        sex: "男",
      },
      {
        num: 61,
        name: "荣鑫宇",
        grade: 0,
        sex: "女",
      },
    ],
  },
  // {
  //   num: 29,
  //   name: "杜晨曦",
  //   grade: 0,
  // },
];
function getAllMembers(groups: Group[]): Member[] {
  let allMembers: Member[] = [];
  groups.forEach((group) => {
    allMembers = allMembers.concat(group.members);
  });
  return allMembers;
}
export const members = getAllMembers(groups);
