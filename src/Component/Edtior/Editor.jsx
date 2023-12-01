import React, { useEffect, useState } from "react";
import { FaRedoAlt, FaUndo } from "react-icons/fa";

const Editor = () => {
  const [selectedFont, setSelectedFont] = useState("Arial");
  const [selectedColor, setSelectedColor] = useState("#000");
  const [editableText, setEditableText] = useState("Add to text");
  const [fontSize, setFontSize] = useState(16);

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleTextChange = (event) => {
    const newText = event.target.value;
    setEditableText(newText);
  };

  const handleSizeChange = (event) => {
    const Size = event.target.value;
    setFontSize(Size);
  };
  const handleFontChange = (event) => {
    const Font = event.target.value;
    setSelectedFont(Font);
  };
  return (
    <section className="md:w-10/12 mt-10   w-11/12 mx-auto border border-gray-600 rounded">
      <div>
        {/* top section */}
        <div className="flex gap-3 p-2">
          <button className="border border-gray-500 rounded gap-1  px-2 hover:bg-gray-200 flex items-center ">
            <FaUndo />
            Undo
          </button>
          <button className="border border-gray-500 rounded gap-1  px-2 hover:bg-gray-200 flex items-center ">
            <FaRedoAlt />
            Redo
          </button>
        </div>
        {/* Body section */}
        <div className=" h-[500px] py-5">
          <div className="flex h-full gap-10 w-full px-5  mb-5">
            <div className="w-2/3 ">
              <textarea
                className="relative block h-full text-start w-full rounded-md py-2 border border-gray-400 px-3 text-base outline-none resize-none"
                name=""
                onChange={handleTextChange}
                defaultValue={editableText}
                style={{
                  fontSize: `${fontSize}px`,
                  color: selectedColor,
                  fontFamily: selectedFont
                }}
                value={editableText}
                id=""
              />
            </div>

            {/* Right Side */}
            <div className="w-1/3 flex flex-col justify-around ">
              {/* font */}
              <div>
                <div className="rounded-md ">
                  <span className="">Font</span>
                  <select
                    name="font"
                    title="font"
                    onChange={handleFontChange}
                    value={selectedFont}
                    className="relative block  w-full rounded-md py-2 border border-gray-400 px-3 text-base outline-none "
                  >
                    <option
                      className="font-medium"
                      value="Font"
                      disabled
                      selected
                    >
                      Select Font
                    </option>
                    <option value="Arial">Arial</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Source Sans Pro">Source Sans Pro</option>
                    <option value="Roboto">Roboto</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Open Sans">Open Sans</option>
                    <option value="Calibri">Calibri</option>
                    <option value="Verdana">Verdana</option>
                    <option value="Cambria">Cambria</option>
                  </select>
                </div>
                {/* Size and Color */}
                <div className="flex items-center gap-5 w-full pt-5">
                  {/* Size */}
                  <div className="rounded-md w-1/2 ">
                    <label htmlFor="fontSize">Size </label>
                    <input
                      type="number"
                      name="fontSize"
                      id="fontSize"
                      onChange={handleSizeChange}
                      value={fontSize}
                      className="relative block  w-full rounded-md py-2 border border-gray-400 px-3 text-base outline-none "
                    />
                  </div>
                  {/* color */}
                  <div className="rounded-md w-full">
                    <label htmlFor="colorPicker">Color</label>
                    <input
                      type="color"
                      id="colorPicker"
                      className="relative block"
                      value={selectedColor}
                      onChange={handleColorChange}
                    />
                  </div>
                </div>
              </div>
              <div>
                <span className="">Add new text</span>

                <input
                  className="relative block  w-full rounded-md py-2 border border-gray-400 px-3 text-base outline-none "
                  type="text"
                  name=""
                  onChange={handleTextChange}
                  value={editableText}
                  id=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Editor;
