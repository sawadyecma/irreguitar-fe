export const FletIndicator = ({ fletCnt }: { fletCnt: number }) => {
  return (
    <>
      <div style={{ width: 32, display: "inline-block" }} />

      <div style={{ width: 24, display: "inline-block", textAlign: "center" }}>
        0
      </div>
      {[...new Array(fletCnt)].map((v, index) => {
        return (
          <div
            style={{
              width: 48,
              display: "inline-block",
              textAlign: "center",
            }}
          >
            {index + 1}
          </div>
        );
      })}
    </>
  );
};
