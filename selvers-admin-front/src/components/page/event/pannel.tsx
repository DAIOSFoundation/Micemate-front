type Props = {
  boardData: { value: number; today: number }[];
};

const Panel = ({ boardData }: Props) => {
  const summaryNames = {
    ongoing: { title: "진행중인 행사", unit: "개" },
    pending: { title: "행사 등록 승인대기", unit: "개" },
    editing: { title: "오늘 신규 등록 행사", unit: "개" },
    total: { title: "누적 행사 수", unit: "건" },
  };

  return (
    <div className="dashboard_panel_wrap">
      <ul>
        {boardData &&
          Object.entries(boardData).map(([key, { value, today }]) => (
            <li key={key}>
              <div className="tit">{summaryNames[key].title}</div>
              <div className="num_wrap">
                <span className="num">
                  {key === "editing"
                    ? today
                      ? Number(today).toLocaleString()
                      : 0
                    : value
                    ? Number(value).toLocaleString()
                    : 0}
                </span>
                <span>{summaryNames[key].unit}</span>
              </div>
              {key !== "editing"
                ? today > 0 && (
                    <div className="increase">{`+${
                      today ? Number(today).toLocaleString() : 0
                    }`}</div>
                  )
                : null}
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Panel;
