class AppComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      validCD: '',
      validCR: '',
      chieuDai: '',
      chieuRong: '',
      chuVi: '',
      dienTich: ''
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleInput = this.handleInput.bind(this);
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
        chieuDai: '',
        chieuRong: '',
        chuVi: (chieuDai + chieuRong) * 2,
        dienTich: chieuDai * chieuRong
      });
    } else {
      if (!chieuDai) {
        this.setState({
          validCD: 'Vui lòng nhập chiều dài'
        });
      }
      if (!chieuRong) {
        this.setState({
          validCR: 'Vui lòng nhập chiều rộng'
        });
      }
      this.setState({
        chuVi: '',
        dienTich: ''
      });
    }
  }

  handleBlur(e) {
    if (e.target.name == 'chieudai') {
      if (!e.target.value) {
        this.setState({
          validCD: 'Vui lòng nhập chiều dài'
        });
      }
    } else if (e.target.name == 'chieurong') {
      if (!e.target.value) {
        this.setState({
          validCR: 'Vui lòng nhập chiều rộng'
        });
      }
    }
  }

  handleInput(e) {
    if (e.target.name == 'chieudai') {
      this.setState({
        validCD: ''
      });
    } else if (e.target.name == 'chieurong') {
      this.setState({
        validCR: ''
      });
    }
  }

  render() {

    return (
      <>
        <form onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label>Chiều dài</label>
            <input onBlur={(e) => this.handleBlur(e)} onInput={(e) => this.handleInput(e)} type="text"
              name="chieudai" value={this.state.chieuDai} onChange={(e) => { this.setState({ chieuDai: e.target.value }) }} />
            <span>{this.state.validCD}</span>
          </div>
          <br />
          <div>
            <label>Chiều rộng</label>
            <input onBlur={(e) => this.handleBlur(e)} onInput={(e) => this.handleInput(e)} type="text"
              name="chieurong" value={this.state.chieuRong} onChange={(e) => { this.setState({ chieuRong: e.target.value }) }} />
            <span>{this.state.validCR}</span>
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