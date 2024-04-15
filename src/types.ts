
// COLOR
type RGB = `rgb(${number}, ${number}, ${number})`;
type RGBA = `rgba(${number}, ${number}, ${number}, ${number})`;
type HEX = `#${string}`;

export type Color = RGB | RGBA | HEX;

// Anchor

const block = ["top", "bottom"] as const;
const inline = ["start", "end", "left", "right"] as const;
type Tblock = (typeof block)[number];
type Tinline = (typeof inline)[number];
export type Anchor =
  | Tblock
  | Tinline
  | "center"
  | "center center"
  | `${Tblock} ${Tinline | "center"}`
  | `${Tinline} ${Tblock | "center"}`;

  // MENU

  export interface Menu {
    activator: string;
    text: string;
    location: Anchor;
    origin: Anchor;
  }
