import React from "react";

function Soal() {
  return (
    <div>
      <form>
        <p>1. Pertanyaan</p>
        <input type="radio" id="html" name="fav_language" value="HTML" />
        <label for="html">HTML</label>
        <br />
        <input type="radio" id="css" name="fav_language" value="CSS" />
        <label for="css">CSS</label>
        <br />
        <input
          type="radio"
          id="javascript"
          name="fav_language"
          value="JavaScript"
        />
        <label for="javascript">JavaScript</label>
      </form>
    </div>
  );
}

export default Soal;
