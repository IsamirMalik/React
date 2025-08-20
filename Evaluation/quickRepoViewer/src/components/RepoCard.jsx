const RepoCard = ({ data }) => {
  return (
    <>
            <div style={{ textAlign: "center" , fontFamily: "fantasy"}}>
                <h1>Repositories</h1>
            </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
          justifyContent: "center",
        }}
      >
        {data.map((repo) => {
          return (<>

            
            <div
              key={repo.id}
              style={{
                  border: "1px solid black",
                  margin: "10px",
                  padding: "10px",
                  backgroundColor: "antiquewhite",
                  borderRadius: "10px",
                  color: "black",
                  width : "430px",
                  boxShadow : "0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)"
                }}
            >
              <p>
                <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                  Repo-Name : 
                </span>
                <span style={{ fontFamily: "cursive" , color: "green" }}>{repo.name}</span>
              </p>
              <p>
                <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                  Default-Branch :
                </span>
                <span style={{ fontFamily: "cursive" , color :"green" }}>
                {repo.default_branch}
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                  Language :
                </span>
                <span style={{ fontFamily: "cursive" , color :"green"}}>
                {repo.language}
                </span>
              </p>
              <p>
                <span style={{ fontFamily: "sans-serif", fontWeight: "bold" }}>
                  Url :
                </span>
                <span
                  style={{
                      fontFamily: "monospace",
                      fontWeight: "italic",
                      fontSize: "12px",
                      color: "blue",
                      cursor: "pointer",
                      backgroundColor: "yellow",
                      borderRadius: "20px",
                      border: "1px solid beige",
                      padding: "5px",
                    }}
                    >
                  <a href={repo.url} target="_blank">{repo.url}</a>
                </span>
              </p>
            </div>
          </>);
        })}
      </div>
    </>
    
);
};

export default RepoCard;
<></>;
