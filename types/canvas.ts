export type Color = {
  r: number;
  g: number;
  b: number;
};

export type Camera = {
  x: number;
  y: number;
}

export enum LayerType {
  Rectangle,
  Ellipse,
  Path,
  Text,
  Note
};

export type RecangleLayer = {
  type: LayerType.Rectangle;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
}

export type EllipseLayer = {
  type: LayerType.Ellipse;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
}

export type PathLayer = {
  type: LayerType.Path;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  points: number[][];
  value?: string;
}

export type TextLayer = {
  type: LayerType.Text;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
}

export type NoteLayer = {
  type: LayerType.Note;
  x: number;
  y: number;
  height: number;
  width: number;
  fill: Color;
  value?: string;
}

export type Point = {
  x: number;
  y: number;
}

export type XYWH = {
  x: number;
  y: number;
  width: number;
  height: number;
}

export type CanvasState =
  | {
    mode: CanvasMode.None
  }
  | {
    mode: CanvasMode.SelectionNet,
  }
  | {
    mode: CanvasMode.Translating,
  }
  | {
    mode: CanvasMode.Inserting,
  }
  | {
    mode: CanvasMode.Pencil,
  }
  | {
    mode: CanvasMode.Pressing,
  }
  | {
    mode: CanvasMode.Resizing,
  }

export enum CanvasMode {
  None,
  Pressing,
  SelectionNet,
  Translating,
  Inserting,
  Resizing,
  Pencil
};

