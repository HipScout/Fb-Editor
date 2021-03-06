let html=
`
<div class="wrapper">
        <div class="btn bold">ð</div>
        <div class="btn italic">ð°</div>
        <div class="btn underline">UÌ²</div>
        <div class="btn strikeThrough">SÌ¶</div>
        <div class="btn cursive">ð</div> 
        <div class="btn smallCaps">Sá´á´ÊÊ</div> 
        <div class="btn outline">ð½</div> 
        <div class="btn upsideDown">â©</div> 
    </div>
`
$("body").arrive(`[aria-label="Emoji"]`, function (e) {
    $(e)
      .parent()
    .append(html)      
  });
  const textFormatOption = (type) => {
    console.log("dfgdfg", selectedObj);
    restoreSelection(selectedObj);
    if ($(`[aria-label="Emoji"]`).length) {
      var stringSelected = window.getSelection().toString();
      if (stringSelected) {
        var reformatedText = reformatIt(stringSelected, type);
        console.log(reformatedText);
  
        const blob = new Blob([reformatedText], {
          type: "text/plain", 
        });
        let cpData = [
          new ClipboardItem({
            "text/plain": blob,
          }),
        ];
  
        navigator.clipboard.write(cpData).then(
          function () {
            restoreSelection(selectedObj);
            setTimeout(() => {
              console.log("pasting");
              document.execCommand("paste");
            }, 500);
          },
          function (error) {
            console.error("Unable to paste the data. Error:");
            console.log(error);
          }
        );
      }
    }
  };

  $(document).on("click", ".bold", () => {
    textFormatOption(0);
  });
  
  $(document).on("click", ".italic", () => {
    textFormatOption(1);
  });
  $(document).on("click", ".strikeThrough", () => {
    textFormatOption(2);
  });
  $(document).on("click", ".cursive", () => {
    textFormatOption(4);
  });
  $(document).on("click", ".upsideDown", () => {
    textFormatOption(5);
  });
  $(document).on("click", ".underline", () => {
    textFormatOption(6);
  });
  $(document).on("click", ".outline", () => {
    textFormatOption(7);
  });
  $(document).on("click", ".smallCaps", () => {
    textFormatOption(8);
  });
  function saveSelection() {
    if (window.getSelection) {
      sel = window.getSelection();
      if (sel.getRangeAt && sel.rangeCount) {
        return sel.getRangeAt(0);
      }
    } else if (document.selection && document.selection.createRange) {
      return document.selection.createRange();
    }
    return null;
  }
  
  function restoreSelection(range) {
    if (range) {
      if (window.getSelection) {
        sel = window.getSelection();
        sel.removeAllRanges();
        sel.addRange(range);
      } else if (document.selection && range.select) {
        range.select();
      }
    }
  }
  
  var selectedObj = "";
  
  $(document).on("selectionchange", function (e) {
    if ($(`[aria-label="Emoji"]`).length) {
      var stringSelected = window.getSelection().toString();
      if (stringSelected) {
        selectedObj = saveSelection();
      }
    }
  });
    
  var charArray = [];
charArray["A"] = ["ð", "ð", "ð¼", "AÌ¶", "ð","â","AÍ","ð¸","á´"];
charArray["B"] = ["ð", "ð", "ð½", "BÌ¶", "â¬","q","BÍ","ð¹","Ê"];
charArray["C"] = ["ð", "ð", "ð¾", "CÌ¶", "ð","Ï½","CÍ","â","á´"];
charArray["D"] = ["ð", "ð", "ð¿", "DÌ¶", "ð","á¡","DÍ","ð»","á´"];
charArray["E"] = ["ð", "ð", "ð", "EÌ¶", "â°","Æ","EÍ","ð¼","á´"];
charArray["F"] = ["ð", "ð", "ð", "FÌ¶", "â±","â²","FÍ","ð½","ê°"];
charArray["G"] = ["ð", "ð", "ð", "GÌ¶", "ð¢","Æ","GÍ","ð¾","É¢"];
charArray["H"] = ["ð", "ð", "ð", "HÌ¶", "â","H","HÍ","â","Ê"];
charArray["I"] = ["ð", "ð¼", "ð°", "IÌ¶", "â","I","IÍ","ð","Éª"];
charArray["J"] = ["ð", "ð", "ð", "JÌ¶", "ð¥","Å¿","JÍ","ð","á´"];
charArray["K"] = ["ð", "ð", "ð", "KÌ¶", "ð¦","ê","KÍ","ð","á´"];
charArray["L"] = ["ð", "ð", "ð", "LÌ¶", "â","Ë¥","LÍ","ð","Ê"];
charArray["M"] = ["ð ", "ð", "ð", "MÌ¶", "â³","W","MÍ","ð","á´"];
charArray["N"] = ["ð¡", "ð", "ð", "NÌ¶", "ð©","N","NÍ","â","É´"];
charArray["O"] = ["ð¢", "ð", "ð", "OÌ¶", "ðª","O","OÍ","ð","á´"];
charArray["P"] = ["ð£", "ð", "ð", "PÌ¶", "ð«","Ô","PÍ","â","á´"];
charArray["Q"] = ["ð¤", "ð", "ð", "QÌ¶", "ð¬","á½","QÍ","â","Ç«"];
charArray["R"] = ["ð¥", "ð", "ð", "RÌ¶", "â","á´","RÍ","â","Ê"];
charArray["S"] = ["ð¦", "ð", "ð", "SÌ¶", "ð®","S","SÍ","ð","s"];
charArray["T"] = ["ð§", "ð", "ð", "TÌ¶", "ð¯","â¥","TÍ","ð","á´"];
charArray["U"] = ["ð¨", "ð", "ð", "UÌ¶", "ð°","â©","UÍ","ð","á´"];
charArray["V"] = ["ð©", "ð", "ð", "VÌ¶", "ð±","Î","VÍ","ð","á´ "];
charArray["W"] = ["ðª", "ð", "ð", "WÌ¶", "ð²","M","WÍ","ð","á´¡"];
charArray["X"] = ["ð«", "ð", "ð", "XÌ¶", "ð³","X","XÍ","ð","x"];
charArray["Y"] = ["ð¬", "ð ", "ð", "YÌ¶", "ð´","â","YÍ","ð","Ê"];
charArray["Z"] = ["ð­", "ð¡", "ð", "ZÌ¶", "ðµ","Z","ZÍ","â¤","á´¢"];
charArray["a"] = ["ð®", "ð¢", "ð", "aÌ¶", "ð¶","É","aÍ","ð","á´"];
charArray["b"] = ["ð¯", "ð£", "ð", "bÌ¶", "ð·","q","bÍ","ð","Ê"];
charArray["c"] = ["ð°", "ð¤", "ð", "cÌ¶", "ð¸","É","cÍ","ð","á´"];
charArray["d"] = ["ð±", "ð¥", "ð", "dÌ¶", "ð¹","p","dÍ","ð","á´"];
charArray["e"] = ["ð²", "ð¦", "ð", "eÌ¶", "â¯","Ç","eÍ","ð","á´"];
charArray["f"] = ["ð³", "ð§", "ð", "fÌ¶", "ð»","É","fÍ","ð","ê°"];
charArray["g"] = ["ð´", "ð¨", "ð", "gÌ¶", "â","Æ","gÍ","ð","É¢"];
charArray["h"] = ["ðµ", "ð©", "ð", "hÌ¶", "ð½","É¥","hÍ","ð","Ê"];
charArray["i"] = ["ð¶", "ðª", "ð", "iÌ¶", "ð¾","Ä±","iÍ","ð","Éª"];
charArray["j"] = ["ð·", "ð«", "ð", "jÌ¶", "ð¿","É¾","jÍ","ð","á´"];
charArray["k"] = ["ð¸", "ð¬", "ð ", "kÌ¶", "ð","Ê","kÍ","ð","á´"];
charArray["l"] = ["ð¹", "ð­", "ð¡", "lÌ¶", "ð","×","lÍ","ð","Ê"];
charArray["m"] = ["ðº", "ð®", "ð¢", "mÌ¶", "ð","É¯","mÍ","ð","á´"];
charArray["n"] = ["ð»", "ð¯", "ð£", "nÌ¶", "ð","u","nÍ","ð","É´"];
charArray["o"] = ["ð¼", "ð°", "ð¤", "oÌ¶", "â´","o","oÍ","ð ","á´"];
charArray["p"] = ["ð½", "ð±", "ð¥", "pÌ¶", "ð","d","pÍ","ð¡","á´"];
charArray["q"] = ["ð¾", "ð²", "ð¦", "qÌ¶", "ð","b","qÍ","ð¢","Ç«"];
charArray["r"] = ["ð¿", "ð³", "ð§", "rÌ¶", "ð","É¹","rÍ","ð£","Ê"];
charArray["s"] = ["ð", "ð´", "ð¨", "sÌ¶", "ð","s","sÍ","ð¤","s"];
charArray["t"] = ["ð", "ðµ", "ð©", "tÌ¶", "ð","Ê","tÍ","ð¥","á´"];
charArray["u"] = ["ð", "ð¶", "ðª", "uÌ¶", "ð","n","uÍ","ð¦","á´"];
charArray["v"] = ["ð", "ð·", "ð«", "vÌ¶", "ð","Ê","vÍ","ð§","á´ "];
charArray["w"] = ["ð", "ð¸", "ð¬", "wÌ¶", "ð","Ê","wÍ","ð¨","á´¡"];
charArray["x"] = ["ð", "ð¹", "ð­", "xÌ¶", "ð","x","xÍ","ð©","x"];
charArray["y"] = ["ð", "ðº", "ð®", "yÌ¶", "ð","Ê","yÍ","ðª","Ê"];
charArray["z"] = ["ð", "ð»", "ð¯", "zÌ¶", "ð","z","zÍ","ð«","á´¢"];
charArray["1"] = ["ð­", "1", "ð­", "1Ì¶", "1","â","1Í","ð"];  
charArray["2"] = ["ð®", "2", "ð®", "2Ì¶", "2","â","2Í","ð"];
charArray["3"] = ["ð¯", "3", "ð¯", "3Ì¶", "3","â","3Í","ð"];
charArray["4"] = ["ð°", "4", "ð°", "4Ì¶", "4","4","4Í","ð"];
charArray["5"] = ["ð±", "5", "ð±", "5Ì¶", "5","5","5Í","ð"];
charArray["6"] = ["ð²", "6", "ð²", "6Ì¶", "6","9","6Í","ð"];
charArray["7"] = ["ð³", "7", "ð³", "7Ì¶", "7","ð","7Í","ð"];
charArray["8"] = ["ð´", "8", "ð´", "8Ì¶", "8","8","8Í","ð "];
charArray["9"] = ["ðµ", "9", "ðµ", "9Ì¶", "9","6","9Í","ð¡"];
charArray["0"] = ["ð¬", "0", "ð¬", "0Ì¶", "0","0","0Í","ð"];



const reformatIt = (theText, textType) => {
  var c = "";
  var reformatted = "";
  for (var x = 0; x < theText.length; x++) {
    c = theText.charAt(x);
    if (c in charArray) {
      reformatted += charArray[c][textType];
    } else {
      reformatted += c;
    }
  }
  return reformatted;
};



 

