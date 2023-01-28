import React from "react";
import { useDragNDrop } from "@tradelunch/usedragndrop";

function App() {
    const { onMouseDown, onDragStart, onMouseUp, style, dragRef } =
        useDragNDrop({
            position: "absolute",
        });

    return (
        <div
            style={{
                // willChange: "transform, top, left",
                background: "#b6b6e5",
                height: "100vh",
                width: "100%",
            }}
        >
            <div
                style={style}
                ref={dragRef}
                // draggable
                onDragStart={onDragStart}
                onMouseDown={onMouseDown}
                onMouseUp={onMouseUp}
            >
                <div
                    style={{
                        width: "100px",
                        height: "100px",
                        backgroundColor: "grey",
                        display: "flex",
                        flex: "1",
                        justifyContent: "center",
                        alignItems: "center",
                        margin: "0px",
                        padding: "0px",
                        fontWeight: "bold",
                        border: "2px solid darkgrey",
                    }}
                >
                    <span>Hello Drag!!</span>
                </div>
            </div>
        </div>
    );
}

export default App;
