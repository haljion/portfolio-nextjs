export const pageList = [
  { title: 'プロフィール・スキル', link: '/aboutme', icon: 'calendar' },
  { title: '経歴', link: '/career', icon: 'calendar' },
  { title: '学習内容', link: '/study', icon: 'calendar' },
  { title: '制作物', link: '/products', icon: 'calendar' },
]

// 資格
export const certificationList = [
  { id: 1, name: 'Java Silver 8', acquisitionDate: '2018/06' },
  { id: 2, name: '統計検定 2級', acquisitionDate: '2022/10' },
  { id: 3, name: 'Python データ分析エンジニア認定試験', acquisitionDate: '2023/04' },
]

// スキル
export const skillList = [
  {
    id: 1,
    name: 'Java',
  },
  {
    id: 1,
    name: 'JavaScript',
  },
  {
    id: 1,
    name: 'TypeScript',
  },
  {
    id: 1,
    name: 'C#',
  },
  {
    id: 1,
    name: 'Kotlin',
  },
  {
    id: 1,
    name: 'Python',
  },
  {
    id: 1,
    name: 'Selenium',
  },
  {
    id: 1,
    name: 'PHP',
  },
  {
    id: 1,
    name: 'Laravel',
  },
  {
    id: 1,
    name: 'Spring Boot',
  },
  {
    id: 1,
    name: 'jQuery',
  },
  {
    id: 1,
    name: 'Angular',
  },
  {
    id: 1,
    name: 'React.js',
  },
  {
    id: 1,
    name: 'Next.js',
  },
  {
    id: 1,
    name: 'ASP.NET Core',
  },
  {
    id: 1,
    name: 'Oracle',
  },
  {
    id: 1,
    name: 'MySQL',
  },
  {
    id: 1,
    name: 'PostgreSQL',
  },
  {
    id: 1,
    name: 'DB2',
  },
  {
    id: 1,
    name: 'AWS',
  },
  {
    id: 1,
    name: 'Docker',
  },
  {
    id: 1,
    name: 'Git',
  },
  {
    id: 2,
    name: 'Django',
  },
  {
    id: 2,
    name: 'Django Rest Framework',
  },
  {
    id: 2,
    name: 'Flask',
  },
  {
    id: 2,
    name: 'Jupyter Notebook',
  },
  {
    id: 2,
    name: 'scikit-learn',
  },
  {
    id: 2,
    name: 'Ruby',
  },
  {
    id: 2,
    name: 'Ruby on Rails',
  },
  {
    id: 2,
    name: 'Google Apps Script',
  },
  {
    id: 2,
    name: 'R',
  },
  {
    id: 2,
    name: 'SQLite',
  },
  {
    id: 2,
    name: 'heroku',
  },
  {
    id: 2,
    name: 'Vercel',
  },
]

// 経歴
export const careerList = [
  {
    name: 'メーカー系/Webアプリケーション開発',
    period: '2023/05~現在',
    detail: 'カメラと各種クラウドサービスの連携設定を行うユーザ用Webシステムの新規開発',
    process: ['詳細設計', '開発', '単体テスト', '結合テスト'],
    skill: ['Next.js', 'React.js', 'JavaScript', 'Python'],
  },
  {
    name: 'メディア系/Webアプリケーション開発',
    period: '2022/09~2023/03',
    detail: '新規社内システムの開発および既存のWebシステム改修',
    process: [
      '要件定義',
      '詳細設計',
      '開発',
      '単体テスト',
      '結合テスト',
      '本番リリース',
      'データ分析',
    ],
    skill: ['React.js', 'TypeScript', 'Spring Boot', 'Java', 'Python'],
  },
  {
    name: '証券系/Webアプリケーション開発',
    period: '2022/05~2023/08',
    detail: '既存のWebシステム改修、およびPHP(7.2→8.0)とLaravel(6系→9系)のバージョンアップ対応',
    process: ['詳細設計', '開発', '単体テスト', '結合テスト'],
    skill: ['Laravel', 'PHP', 'jQuery', 'JavaScript', 'Docker'],
  },
  {
    name: '飲⾷系/Androidアプリケーション開発',
    period: '2022/04~2022/05',
    detail: '注文時に利⽤する既存のAndroidタブレット⽤システムの機能追加改修',
    process: ['開発', '単体テスト'],
    skill: ['Kotlin'],
  },
  {
    name: '建築系/Webアプリケーション開発',
    period: '2022/01~2022/04',
    detail: 'BIM(3D建造物モデルを使⽤した建築業界の業務管理システム)プラットフォームの開発',
    process: ['開発', '単体テスト', '結合テスト'],
    skill: ['ASP.NET Core', 'C#', 'Angular', 'TypeScript', 'Python'],
  },
  {
    name: '通信系/Webアプリケーション開発',
    period: '2021/04~2021/12',
    detail: 'RCS(次世代SMS規格)を使⽤したメッセージサービスの法⼈向け設定Webシステムの開発',
    process: ['開発', '単体テスト', '結合テスト'],
    skill: ['React.js', 'TypeScript', 'Spring Boot', 'Java'],
  },
  {
    name: '保険系/Web API, バッチ処理開発',
    period: '2020/04~2020/07',
    detail: 'COBOLで構築された損保向けのマスタ機能のJavaへのリファクタリング',
    process: ['開発', '単体テスト', '結合テスト'],
    skill: ['Java'],
  },
  {
    name: '通信系/Webアプリケーション開発',
    period: '2019/09~2019/11',
    detail: '機械学習によるFAQ返答システムのWebシステムへの組み込み',
    process: ['開発', '単体テスト', '結合テスト'],
    skill: ['jQuery', 'JavaScript', 'Spring Boot', 'Java', 'Python'],
  },
  {
    name: '製造系/Webアプリケーション開発',
    period: '2019/07~2019/08',
    detail: '既存のメーカー向け倉庫・在庫管理Webシステム改修',
    process: ['開発', '単体テスト', '結合テスト'],
    skill: ['jQuery', 'JavaScript', 'Spring Boot', 'Java'],
  },
  {
    name: '金融系/WebAPI開発',
    period: '2019/04~2019/06',
    detail: '銀行事務員向けの事務処理システムの開発',
    process: ['開発', '単体テスト', '結合テスト'],
    skill: ['Java'],
  },
  {
    name: '金融系/WebAPI開発',
    period: '2018/06~2019/03',
    detail: '家計簿アプリケーションの銀行口座連携用共通基盤の開発',
    process: ['開発', '単体テスト', '結合テスト'],
    skill: ['Java'],
  },
]

// 制作物
export const productList = [
  {
    id: 1,
    name: 'PokeManage',
    img: '/img/product1.png',
    detail: 'ゲーム「ポケットモンスター」の対戦用育成個体管理Webアプリケーション',
    skill: ['React.js', 'TypeScript', 'Django Rest Framework', 'Python', 'Docker', 'AWS'],
    git: [
      'https://github.com/haljion/pokemanage_react',
      'https://github.com/haljion/pokemanage_api',
    ],
    url: 'https://www.pokemanage.com/',
    release: false,
  },
  {
    id: 2,
    name: 'Portfolio',
    img: '/img/product2.png',
    detail: '制作物や学習内容等を公開するポートフォリオサイト',
    skill: ['Next.js', 'React.js', 'TypeScript', 'Docker', 'Vercel'],
    git: ['https://github.com/haljion/portfolio-nextjs'],
    url: 'https://haljions-portfolio.vercel.app/',
    release: true,
  },
]

export const studyList = [
  {
    title: 'Python実践データ分析100本ノック',
    tags: ['書籍', 'データ分析・AI'],
    Description:
      'Numpy、Pandas、Matplotlibによるデータ分析・前処理を中心に、機械学習による予測や最適化問題、画像処理(OpenCV)・自然言語処理(Mecab)等を実践的に学習。データ処理・機械学習の具体的な実装の流れを理解し、習得することができた。',
    link: 'https://www.shuwasystem.co.jp/book/b497338.html',
    git: 'https://github.com/haljion/stydy_0001',
  },
  {
    title: '統計学',
    tags: ['Webサイト', 'データ分析・AI'],
    Description:
      'Webサイト「統計学の時間」を中心に、データ分析・AIに必要な統計学を学習。統計検定2級を取得。',
    link: 'https://bellcurve.jp/statistics/course/',
    git: 'https://github.com/haljion/study_0002',
  },
  {
    title: '機械学習のエッセンス',
    tags: ['書籍', 'データ分析・AI'],
    Description:
      'scikit-learn等に実装されている回帰やSVM等のアルゴリズム、およびその前提となる数学・統計処理をゼロからPythonで実装することにより、アルゴリズムの内容を深く理解し、適切な手法の選択やハイパーパラメータのチューニング等を行う為の知識が身に付いた。',
    link: 'https://www.sbcr.jp/product/4797393965/',
    git: 'https://github.com/haljion/study_0003',
  },

  {
    title: '人工知能プログラミングのための数学がわかる本',
    tags: ['書籍', 'データ分析・AI'],
    Description:
      '機械学習に必要な高校〜大学レベルの数学を、学生時代の復習も兼ねて学習。機械学習においてどの数学の分野がどのように活用されているか？を関連付けることにより、後の学習におけるより具体的な機械学習の処理の理解に役立った。',
    link: 'https://www.kadokawa.co.jp/product/321708000339/',
  },
  {
    title: '人工知能は人間を超えるか ディープラーニングの先にあるもの',
    tags: ['書籍', 'データ分析・AI'],
    Description: '人工知能研究の歴史や機械学習・ディープラーニングの概論、AI技術の活用事例を学習。',
    link: 'https://www.kadokawa.co.jp/product/321410000316/',
  },
]
