class PostItem extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }


  handleClick(e) {
    e.preventDefault();
    this.props.onClickItem(e);
  }

  render() {
    var urlPic = `images/${this.props.img}`;
    return (
      <li>
        <a href='#' onClick={(e) => this.handleClick(e)}><img src={urlPic} alt={this.props.img} /></a>
        <div className="khoiphai">
          <h2><a href="#">{this.props.title}</a></h2>
          <p>{this.props.content}</p>
        </div>
        <div className="clr"></div>
      </li>
    )
  }
}

const listNews = [
  {
    id: 1,
    img: 'h1.jpg',
    title: 'Cách phối đồ đi hẹn hò 8/3 đẹp như Quỳnh Anh Shyn',
    content: '8/3 sắp đến rồi, những gợi ý mặc đẹp dưới đây sẽ giúp bạn chọn được bộ đồ ưng ý. Cùng học Quỳnh Anh Shyn một vài cách phối đồ cực hay ho để bạn đi hẹn hò 8/3 nhé!'
  },
  {
    id: 2,
    img: 'h2.jpg',
    title: 'Diện đồ đôi cho teen đi hẹn hò ngày 8/3',
    content: 'Những cặp đôi yêu nhau đã có ý tưởng nên mặc gì trong ngày 8/3 chưa? Những bộ đồ đôi vừa đẹp vừa thoải mái chắc chắn sẽ là gợi ý ăn mặc cho các bạn trẻ. Dưới đây là những bộ đồ đôi đẹp để teen tham ...'
  },
  {
    id: 3,
    img: 'h3.jpg',
    title: 'Hướng dẫn chọn trang phục cho teengirl ngày 8/3',
    content: 'Các teen girl nhà mình hẳn đang rất hào hứng chọn những bộ đồ thật đẹp để đi chơi 8/3. Những gợi ý ăn mặc dưới đây sẽ giúp các nàng có những set đồ thật đẹp để diện trong ngày 8.3 nhé!'
  }
];

class AppComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleClickItem = this.handleClickItem.bind(this);
  }

  handleClickItem(news) {
    console.log(news);
  }

  render() {

    return (
      <div className='wrapper'>
        <h1>Trang tin VinaEnter Edu</h1>
        <ul>
          {this.props.listNews.map(news =>
            <PostItem
              key={news.id}
              img={news.img}
              title={news.title}
              content={news.content}
              onClickItem={() => this.handleClickItem(news)}
            />
          )}
        </ul>
      </div>
    )
  }
}

// ReactDOM.render(<AppComponent listNews={listNews} />, document.getElementById("root"))
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppComponent listNews={listNews} />
  </React.StrictMode>
);