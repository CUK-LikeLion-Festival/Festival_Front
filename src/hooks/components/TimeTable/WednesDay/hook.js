function WednesDayTimeTableDetail() {
  const wedDay = [
    {
      time: "15:05 ~ 15:15",
      title: "김민지",
      description: ["ㄹㅇㅇ", "ㄴㄴㅇㅇ", "ㅇㄹㅇX"],
    },
    {
      time: "15:15 ~ 15:30",
      title: "박예나",
      description: ["박예나", "ㅇㅇ", "ㅇㄹㄴ"],
    },
    {
      time: "15:30 ~ 16:05",
      title: "밴드실험",
      description: ["밴드실험", "동아리", "이이잉"],
    },
    {
      time: "16:05 ~ 16:30",
      title: "태권도부",
      description: ["태권도", "부", "머시기머시기"],
    },
  ];
  const wedNight = [
    {
      time: "18:30 ~ 18:40",
      title: "오프닝",
      description: ["ㄹㅇㅇ", "ㄴㄴㅇㅇ", "ㅇㄹㅇX"],
    },
    {
      time: "18:40 ~ 19:50",
      title: "동아리 공연",
      description: ["화랑", "F.O.M", "CDZ", "경력직 신입", "스플렌디드"],
    },
    {
      time: "19:50 ~ 20:20",
      title: "총학생회 추첨",
      description: [""],
    },
    {
      time: "18:40 ~ 21:30",
      title: "동아리 공연",
      description: ["M.I.L", "군대가라안재현", "세이크리드", "밴드실험"],
    },
  ];

  return { wedDay, wedNight };
}

export default WednesDayTimeTableDetail;
