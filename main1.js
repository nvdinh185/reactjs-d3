class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chuVi: '',
      dienTich: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit = function (e) {
    e.preventDefault();
    const formValue = {};
    for (const el of e.target) {
      if (el.name) {
        formValue[el.name] = el.value;
      }
    }
    var chieuDai = Number(formValue['chieudai']);
    var chieuRong = Number(formValue['chieurong']);
    if (chieuDai && chieuRong) {
      this.setState({
        chuVi: (chieuDai + chieuRong) * 2,
        dienTich: chieuDai * chieuRong
      });
    }
  }

  render() {

    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>Chiều dài</label>
            <input type="text" name="chieudai" />
          </div>
          <br />
          <div>
            <label>Chiều rộng</label>
            <input type="text" name="chieurong" />
          </div>
          <input type="submit" value="Tinh" />
        </form>
        {this.state.chuVi && this.state.dienTich && <div>
          <p>Chu vi: {this.state.chuVi}</p>
          <p>Diện tích: {this.state.dienTich}</p>
        </div>}
      </>
    )
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppComponent />
  </React.StrictMode>
);