import "./loading.styles.scss";

const Loading = () => {
  return (
    <div className="wrapper">
      <div className="loading-container">
        <div className="child">
          <div class="lds-ellipsis">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Loading;
