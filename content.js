let html=
`
<div class="wrapper">
        <div class="btn bold">𝗕</div>
        <div class="btn italic">𝑰</div>
        <div class="btn underline">U̲</div>
        <div class="btn strikeThrough">S̶</div>
        <div class="btn cursive">𝓒</div> 
        <div class="btn smallCaps">Sᴍᴀʟʟ</div> 
        <div class="btn outline">𝔽</div> 
        <div class="btn upsideDown">∩</div> 
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
charArray["A"] = ["𝗔", "𝘈", "𝘼", "A̶", "𝒜","∀","A͟","𝔸","ᴀ"];
charArray["B"] = ["𝗕", "𝘉", "𝘽", "B̶", "ℬ","q","B͟","𝔹","ʙ"];
charArray["C"] = ["𝗖", "𝘊", "𝘾", "C̶", "𝒞","Ͻ","C͟","ℂ","ᴄ"];
charArray["D"] = ["𝗗", "𝘋", "𝘿", "D̶", "𝒟","ᗡ","D͟","𝔻","ᴅ"];
charArray["E"] = ["𝗘", "𝘌", "𝙀", "E̶", "ℰ","Ǝ","E͟","𝔼","ᴇ"];
charArray["F"] = ["𝗙", "𝘍", "𝙁", "F̶", "ℱ","Ⅎ","F͟","𝔽","ꜰ"];
charArray["G"] = ["𝗚", "𝘎", "𝙂", "G̶", "𝒢","ƃ","G͟","𝔾","ɢ"];
charArray["H"] = ["𝗛", "𝘏", "𝙃", "H̶", "ℋ","H","H͟","ℍ","ʜ"];
charArray["I"] = ["𝐈", "𝐼", "𝑰", "I̶", "ℐ","I","I͟","𝕀","ɪ"];
charArray["J"] = ["𝗝", "𝘑", "𝙅", "J̶", "𝒥","ſ","J͟","𝕁","ᴊ"];
charArray["K"] = ["𝗞", "𝘒", "𝙆", "K̶", "𝒦","ꓘ","K͟","𝕂","ᴋ"];
charArray["L"] = ["𝗟", "𝘓", "𝙇", "L̶", "ℒ","˥","L͟","𝕃","ʟ"];
charArray["M"] = ["𝗠", "𝘔", "𝙈", "M̶", "ℳ","W","M͟","𝕄","ᴍ"];
charArray["N"] = ["𝗡", "𝘕", "𝙉", "N̶", "𝒩","N","N͟","ℕ","ɴ"];
charArray["O"] = ["𝗢", "𝘖", "𝙊", "O̶", "𝒪","O","O͟","𝕆","ᴏ"];
charArray["P"] = ["𝗣", "𝘗", "𝙋", "P̶", "𝒫","Ԁ","P͟","ℙ","ᴘ"];
charArray["Q"] = ["𝗤", "𝘘", "𝙌", "Q̶", "𝒬","Ὁ","Q͟","ℚ","ǫ"];
charArray["R"] = ["𝗥", "𝘙", "𝙍", "R̶", "ℛ","ᴚ","R͟","ℝ","ʀ"];
charArray["S"] = ["𝗦", "𝘚", "𝙎", "S̶", "𝒮","S","S͟","𝕊","s"];
charArray["T"] = ["𝗧", "𝘛", "𝙏", "T̶", "𝒯","⊥","T͟","𝕋","ᴛ"];
charArray["U"] = ["𝗨", "𝘜", "𝙐", "U̶", "𝒰","∩","U͟","𝕌","ᴜ"];
charArray["V"] = ["𝗩", "𝘝", "𝙑", "V̶", "𝒱","Λ","V͟","𝕍","ᴠ"];
charArray["W"] = ["𝗪", "𝘞", "𝙒", "W̶", "𝒲","M","W͟","𝕎","ᴡ"];
charArray["X"] = ["𝗫", "𝘟", "𝙓", "X̶", "𝒳","X","X͟","𝕏","x"];
charArray["Y"] = ["𝗬", "𝘠", "𝙔", "Y̶", "𝒴","⅄","Y͟","𝕐","ʏ"];
charArray["Z"] = ["𝗭", "𝘡", "𝙕", "Z̶", "𝒵","Z","Z͟","ℤ","ᴢ"];
charArray["a"] = ["𝗮", "𝘢", "𝙖", "a̶", "𝒶","ɐ","a͟","𝕒","ᴀ"];
charArray["b"] = ["𝗯", "𝘣", "𝙗", "b̶", "𝒷","q","b͟","𝕓","ʙ"];
charArray["c"] = ["𝗰", "𝘤", "𝙘", "c̶", "𝒸","ɔ","c͟","𝕔","ᴄ"];
charArray["d"] = ["𝗱", "𝘥", "𝙙", "d̶", "𝒹","p","d͟","𝕕","ᴅ"];
charArray["e"] = ["𝗲", "𝘦", "𝙚", "e̶", "ℯ","ǝ","e͟","𝕖","ᴇ"];
charArray["f"] = ["𝗳", "𝘧", "𝙛", "f̶", "𝒻","ɟ","f͟","𝕗","ꜰ"];
charArray["g"] = ["𝗴", "𝘨", "𝙜", "g̶", "ℊ","ƃ","g͟","𝕘","ɢ"];
charArray["h"] = ["𝗵", "𝘩", "𝙝", "h̶", "𝒽","ɥ","h͟","𝕙","ʜ"];
charArray["i"] = ["𝗶", "𝘪", "𝙞", "i̶", "𝒾","ı","i͟","𝕚","ɪ"];
charArray["j"] = ["𝗷", "𝘫", "𝙟", "j̶", "𝒿","ɾ","j͟","𝕛","ᴊ"];
charArray["k"] = ["𝗸", "𝘬", "𝙠", "k̶", "𝓀","ʞ","k͟","𝕜","ᴋ"];
charArray["l"] = ["𝗹", "𝘭", "𝙡", "l̶", "𝓁","ן","l͟","𝕝","ʟ"];
charArray["m"] = ["𝗺", "𝘮", "𝙢", "m̶", "𝓂","ɯ","m͟","𝕞","ᴍ"];
charArray["n"] = ["𝗻", "𝘯", "𝙣", "n̶", "𝓃","u","n͟","𝕟","ɴ"];
charArray["o"] = ["𝗼", "𝘰", "𝙤", "o̶", "ℴ","o","o͟","𝕠","ᴏ"];
charArray["p"] = ["𝗽", "𝘱", "𝙥", "p̶", "𝓅","d","p͟","𝕡","ᴘ"];
charArray["q"] = ["𝗾", "𝘲", "𝙦", "q̶", "𝓆","b","q͟","𝕢","ǫ"];
charArray["r"] = ["𝗿", "𝘳", "𝙧", "r̶", "𝓇","ɹ","r͟","𝕣","ʀ"];
charArray["s"] = ["𝘀", "𝘴", "𝙨", "s̶", "𝓈","s","s͟","𝕤","s"];
charArray["t"] = ["𝘁", "𝘵", "𝙩", "t̶", "𝓉","ʇ","t͟","𝕥","ᴛ"];
charArray["u"] = ["𝘂", "𝘶", "𝙪", "u̶", "𝓊","n","u͟","𝕦","ᴜ"];
charArray["v"] = ["𝘃", "𝘷", "𝙫", "v̶", "𝓋","ʌ","v͟","𝕧","ᴠ"];
charArray["w"] = ["𝘄", "𝘸", "𝙬", "w̶", "𝓌","ʍ","w͟","𝕨","ᴡ"];
charArray["x"] = ["𝘅", "𝘹", "𝙭", "x̶", "𝓍","x","x͟","𝕩","x"];
charArray["y"] = ["𝘆", "𝘺", "𝙮", "y̶", "𝓎","ʎ","y͟","𝕪","ʏ"];
charArray["z"] = ["𝘇", "𝘻", "𝙯", "z̶", "𝓏","z","z͟","𝕫","ᴢ"];
charArray["1"] = ["𝟭", "1", "𝟭", "1̶", "1","⇂","1͟","𝟙"];  
charArray["2"] = ["𝟮", "2", "𝟮", "2̶", "2","↊","2͟","𝟚"];
charArray["3"] = ["𝟯", "3", "𝟯", "3̶", "3","↋","3͟","𝟛"];
charArray["4"] = ["𝟰", "4", "𝟰", "4̶", "4","4","4͟","𝟜"];
charArray["5"] = ["𝟱", "5", "𝟱", "5̶", "5","5","5͟","𝟝"];
charArray["6"] = ["𝟲", "6", "𝟲", "6̶", "6","9","6͟","𝟞"];
charArray["7"] = ["𝟳", "7", "𝟳", "7̶", "7","𝘓","7͟","𝟟"];
charArray["8"] = ["𝟴", "8", "𝟴", "8̶", "8","8","8͟","𝟠"];
charArray["9"] = ["𝟵", "9", "𝟵", "9̶", "9","6","9͟","𝟡"];
charArray["0"] = ["𝟬", "0", "𝟬", "0̶", "0","0","0͟","𝟘"];



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



 

