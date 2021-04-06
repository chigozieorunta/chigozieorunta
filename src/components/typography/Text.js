import React from "react"

let textSize, textColor

const Text = props => {
  textColor = props.color || "#000"
  textSize = 10 * (props.size || 1.4)
  return <div style={styles.text}>{props.children}</div>
}

const styles = {
  text: {
    textAlign: "center",
    color: textColor,
    fontSize: textSize,
  },
}

export default Text
