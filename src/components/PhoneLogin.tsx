

export function PhoneLogin () {

  return (
    <>
      <div
        style={{
          justifyContent: "center",
          border: "solid 0.5px",
          borderRadius: "5px",
          padding: "1rem",
        }}
      >
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            style={{
              height: "40px",
              width: "100%",
              textTransform: "uppercase",
              textAlign:"center",
              border:"none",
              outline:"none",
              fontSize:"1rem",
              borderRadius:"3px",
            }}
            type="text"
            placeholder="Numéro de télephone"
          />
        </div>
        <div style={{ paddingTop: "15px" }}>
          <button style={{ width: "100%" }}>Se Connecter</button>
        </div>
      </div>
    </>
  );
}

export default PhoneLogin;