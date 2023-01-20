import Images from "./index";
import classes from './BgProvider.module.scss'
import { useEffect } from "react";
const Bg = () => {
  const randomRotate = () => {
    return Math.floor(Math.random() * (20 - (-20) + 1) + (-20));
  };
  const randomSize = () => {
    return Math.floor((Math.random() * (150 - 100 + 1) + 100));
  }
  const initialBackgroundSetting = () => {
    const imageContainer = document.querySelectorAll(`.${classes.image}`);
    imageContainer.forEach((image) => {
      image.style.transform = `rotate(${randomRotate()}deg)`;
      const paths = image.querySelectorAll("svg");
      paths.forEach((path) => {
        path.setAttribute("viewBox", "0 0 200 200");
        path.setAttribute("preserveAspectRatio", "xMidYMid meet");
        path.style.transform = `scale(${randomSize()}%)`;
      });
    });
  }
  function randomIdSelector() {
    return `image_${Math.floor(Math.random() * (144 - 1 + 1) + 1)}`;
  }
  function randomColorGenerator() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
  }
  function mainFunction() {
    const ids = [
      randomIdSelector(),
      randomIdSelector(),
      randomIdSelector(),
      randomIdSelector(),
      randomIdSelector(),
      randomIdSelector(),
      randomIdSelector(),
      randomIdSelector()
    ]

    ids.map((id) => {
      const image = document.getElementById(id)
      image.style.color = randomColorGenerator()
    })
    setTimeout(() => {
      ids.map((id) => {
        const image = document.getElementById(id);
        image.style.color = "currentColor";
      });
    },1000)
  }
  useEffect(() => {
    initialBackgroundSetting()
    setInterval(mainFunction,1000)
  },[])
    return (
      <>
        <div className="mainContainer" id={classes.mainContainer}>
          <div className={classes.image} id="image_1">
            <Images.Image1 />
          </div>
          <div className={classes.image} id="image_2">
            <Images.Image2 />
          </div>
          <div className={classes.image} id="image_3">
            <Images.Image3 />
          </div>
          <div className={classes.image} id="image_4">
            <Images.Image4 />
          </div>
          <div className={classes.image} id="image_5">
            <Images.Image5 />
          </div>
          <div className={classes.image} id="image_6">
            <Images.Image6 />
          </div>
          <div className={classes.image} id="image_7">
            <Images.Image7 />
          </div>
          <div className={classes.image} id="image_8">
            <Images.Image8 />
          </div>
          <div className={classes.image} id="image_9">
            <Images.Image9 />
          </div>
          <div className={classes.image} id="image_10">
            <Images.Image10 />
          </div>
          <div className={classes.image} id="image_11">
            <Images.Image11 />
          </div>
          <div className={classes.image} id="image_12">
            <Images.Image12 />
          </div>
          <div className={classes.image} id="image_13">
            <Images.Image13 />
          </div>
          <div className={classes.image} id="image_14">
            <Images.Image14 />
          </div>
          <div className={classes.image} id="image_15">
            <Images.Image15 />
          </div>
          <div className={classes.image} id="image_16">
            <Images.Image16 />
          </div>
          <div className={classes.image} id="image_17">
            <Images.Image17 />
          </div>
          <div className={classes.image} id="image_18">
            <Images.Image18 />
          </div>
          <div className={classes.image} id="image_19">
            <Images.Image19 />
          </div>
          <div className={classes.image} id="image_20">
            <Images.Image20 />
          </div>
          <div className={classes.image} id="image_21">
            <Images.Image21 />
          </div>
          <div className={classes.image} id="image_22">
            <Images.Image22 />
          </div>
          <div className={classes.image} id="image_23">
            <Images.Image23 />
          </div>
          <div className={classes.image} id="image_24">
            <Images.Image24 />
          </div>
          <div className={classes.image} id="image_25">
            <Images.Image25 />
          </div>
          <div className={classes.image} id="image_26">
            <Images.Image26 />
          </div>
          <div className={classes.image} id="image_27">
            <Images.Image27 />
          </div>
          <div className={classes.image} id="image_28">
            <Images.Image28 />
          </div>
          <div className={classes.image} id="image_29">
            <Images.Image29 />
          </div>
          <div className={classes.image} id="image_30">
            <Images.Image30 />
          </div>
          <div className={classes.image} id="image_31">
            <Images.Image31 />
          </div>
          <div className={classes.image} id="image_32">
            <Images.Image32 />
          </div>
          <div className={classes.image} id="image_33">
            <Images.Image33 />
          </div>
          <div className={classes.image} id="image_34">
            <Images.Image34 />
          </div>
          <div className={classes.image} id="image_35">
            <Images.Image35 />
          </div>
          <div className={classes.image} id="image_36">
            <Images.Image36 />
          </div>
          <div className={classes.image} id="image_37">
            <Images.Image37 />
          </div>
          <div className={classes.image} id="image_38">
            <Images.Image38 />
          </div>
          <div className={classes.image} id="image_39">
            <Images.Image39 />
          </div>
          <div className={classes.image} id="image_40">
            <Images.Image40 />
          </div>
          <div className={classes.image} id="image_41">
            <Images.Image41 />
          </div>
          <div className={classes.image} id="image_42">
            <Images.Image42 />
          </div>
          <div className={classes.image} id="image_43">
            <Images.Image43 />
          </div>
          <div className={classes.image} id="image_44">
            <Images.Image44 />
          </div>
          <div className={classes.image} id="image_45">
            <Images.Image45 />
          </div>
          <div className={classes.image} id="image_46">
            <Images.Image46 />
          </div>
          <div className={classes.image} id="image_47">
            <Images.Image47 />
          </div>
          <div className={classes.image} id="image_48">
            <Images.Image48 />
          </div>
          <div className={classes.image} id="image_49">
            <Images.Image49 />
          </div>
          <div className={classes.image} id="image_50">
            <Images.Image50 />
          </div>
          <div className={classes.image} id="image_51">
            <Images.Image51 />
          </div>
          <div className={classes.image} id="image_52">
            <Images.Image52 />
          </div>
          <div className={classes.image} id="image_53">
            <Images.Image53 />
          </div>
          <div className={classes.image} id="image_54">
            <Images.Image54 />
          </div>
          <div className={classes.image} id="image_55">
            <Images.Image55 />
          </div>
          <div className={classes.image} id="image_56">
            <Images.Image56 />
          </div>
          <div className={classes.image} id="image_57">
            <Images.Image57 />
          </div>
          <div className={classes.image} id="image_58">
            <Images.Image58 />
          </div>
          <div className={classes.image} id="image_59">
            <Images.Image59 />
          </div>
          <div className={classes.image} id="image_60">
            <Images.Image60 />
          </div>
          <div className={classes.image} id="image_61">
            <Images.Image61 />
          </div>
          <div className={classes.image} id="image_62">
            <Images.Image62 />
          </div>
          <div className={classes.image} id="image_63">
            <Images.Image63 />
          </div>
          <div className={classes.image} id="image_64">
            <Images.Image64 />
          </div>
          <div className={classes.image} id="image_65">
            <Images.Image65 />
          </div>
          <div className={classes.image} id="image_66">
            <Images.Image66 />
          </div>
          <div className={classes.image} id="image_67">
            <Images.Image67 />
          </div>
          <div className={classes.image} id="image_68">
            <Images.Image68 />
          </div>
          <div className={classes.image} id="image_69">
            <Images.Image69 />
          </div>
          <div className={classes.image} id="image_70">
            <Images.Image70 />
          </div>
          <div className={classes.image} id="image_71">
            <Images.Image71 />
          </div>
          <div className={classes.image} id="image_72">
            <Images.Image72 />
          </div>
          <div className={classes.image} id="image_73">
            <Images.Image73 />
          </div>
          <div className={classes.image} id="image_74">
            <Images.Image74 />
          </div>
          <div className={classes.image} id="image_75">
            <Images.Image75 />
          </div>
          <div className={classes.image} id="image_76">
            <Images.Image76 />
          </div>
          <div className={classes.image} id="image_77">
            <Images.Image77 />
          </div>
          <div className={classes.image} id="image_78">
            <Images.Image78 />
          </div>
          <div className={classes.image} id="image_79">
            <Images.Image79 />
          </div>
          <div className={classes.image} id="image_80">
            <Images.Image80 />
          </div>
          <div className={classes.image} id="image_81">
            <Images.Image81 />
          </div>
          <div className={classes.image} id="image_82">
            <Images.Image82 />
          </div>
          <div className={classes.image} id="image_83">
            <Images.Image83 />
          </div>
          <div className={classes.image} id="image_84">
            <Images.Image84 />
          </div>
          <div className={classes.image} id="image_85">
            <Images.Image85 />
          </div>
          <div className={classes.image} id="image_86">
            <Images.Image86 />
          </div>
          <div className={classes.image} id="image_87">
            <Images.Image87 />
          </div>
          <div className={classes.image} id="image_88">
            <Images.Image88 />
          </div>
          <div className={classes.image} id="image_89">
            <Images.Image89 />
          </div>
          <div className={classes.image} id="image_90">
            <Images.Image90 />
          </div>
          <div className={classes.image} id="image_91">
            <Images.Image91 />
          </div>
          <div className={classes.image} id="image_92">
            <Images.Image92 />
          </div>
          <div className={classes.image} id="image_93">
            <Images.Image93 />
          </div>
          <div className={classes.image} id="image_94">
            <Images.Image94 />
          </div>
          <div className={classes.image} id="image_95">
            <Images.Image95 />
          </div>
          <div className={classes.image} id="image_96">
            <Images.Image96 />
          </div>
          <div className={classes.image} id="image_97">
            <Images.Image97 />
          </div>
          <div className={classes.image} id="image_98">
            <Images.Image98 />
          </div>
          <div className={classes.image} id="image_99">
            <Images.Image99 />
          </div>
          <div className={classes.image} id="image_100">
            <Images.Image100 />
          </div>
          <div className={classes.image} id="image_101">
            <Images.Image101 />
          </div>
          <div className={classes.image} id="image_102">
            <Images.Image102 />
          </div>
          <div className={classes.image} id="image_103">
            <Images.Image103 />
          </div>
          <div className={classes.image} id="image_104">
            <Images.Image104 />
          </div>
          <div className={classes.image} id="image_105">
            <Images.Image105 />
          </div>
          <div className={classes.image} id="image_106">
            <Images.Image106 />
          </div>
          <div className={classes.image} id="image_107">
            <Images.Image107 />
          </div>
          <div className={classes.image} id="image_108">
            <Images.Image108 />
          </div>
          <div className={classes.image} id="image_109">
            <Images.Image109 />
          </div>
          <div className={classes.image} id="image_110">
            <Images.Image110 />
          </div>
          <div className={classes.image} id="image_111">
            <Images.Image111 />
          </div>
          <div className={classes.image} id="image_112">
            <Images.Image112 />
          </div>
          <div className={classes.image} id="image_113">
            <Images.Image113 />
          </div>
          <div className={classes.image} id="image_114">
            <Images.Image114 />
          </div>
          <div className={classes.image} id="image_115">
            <Images.Image115 />
          </div>
          <div className={classes.image} id="image_116">
            <Images.Image116 />
          </div>
          <div className={classes.image} id="image_117">
            <Images.Image117 />
          </div>
          <div className={classes.image} id="image_118">
            <Images.Image118 />
          </div>
          <div className={classes.image} id="image_119">
            <Images.Image119 />
          </div>
          <div className={classes.image} id="image_120">
            <Images.Image120 />
          </div>
          <div className={classes.image} id="image_121">
            <Images.Image121 />
          </div>
          <div className={classes.image} id="image_122">
            <Images.Image122 />
          </div>
          <div className={classes.image} id="image_123">
            <Images.Image123 />
          </div>
          <div className={classes.image} id="image_124">
            <Images.Image124 />
          </div>
          <div className={classes.image} id="image_125">
            <Images.Image125 />
          </div>
          <div className={classes.image} id="image_126">
            <Images.Image126 />
          </div>
          <div className={classes.image} id="image_127">
            <Images.Image127 />
          </div>
          <div className={classes.image} id="image_128">
            <Images.Image128 />
          </div>
          <div className={classes.image} id="image_129">
            <Images.Image129 />
          </div>
          <div className={classes.image} id="image_130">
            <Images.Image130 />
          </div>
          <div className={classes.image} id="image_131">
            <Images.Image131 />
          </div>
          <div className={classes.image} id="image_132">
            <Images.Image132 />
          </div>
          <div className={classes.image} id="image_133">
            <Images.Image133 />
          </div>
          <div className={classes.image} id="image_134">
            <Images.Image134 />
          </div>
          <div className={classes.image} id="image_135">
            <Images.Image135 />
          </div>
          <div className={classes.image} id="image_136">
            <Images.Image136 />
          </div>
          <div className={classes.image} id="image_137">
            <Images.Image137 />
          </div>
          <div className={classes.image} id="image_138">
            <Images.Image138 />
          </div>
          <div className={classes.image} id="image_139">
            <Images.Image139 />
          </div>
          <div className={classes.image} id="image_140">
            <Images.Image140 />
          </div>
          <div className={classes.image} id="image_141">
            <Images.Image141 />
          </div>
          <div className={classes.image} id="image_142">
            <Images.Image142 />
          </div>
          <div className={classes.image} id="image_143">
            <Images.Image143 />
          </div>
          <div className={classes.image} id="image_144">
            <Images.Image144 />
          </div>
        </div>
      </>
    );
}

export default Bg