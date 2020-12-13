/**
 * Since there are relatively few colors, ranks, and files,
 * we can manually enumerate their possible values as type literals.
 */
type Color = 'Black' | 'White';
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H';
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8;

export class Position {
  constructor(private file: File, private rank: Rank) {}
  distanceFrom(position: Position) {
    return {
      rank: Math.abs(position.rank - this.rank),
      file: Math.abs(position.file.charCodeAt(0) - this.file.charCodeAt(0)),
    };
  }
}

/**
 * Don't want users to instantiate the Piece class directly.
 * We want them to extend it to create a Queen, Bishop, and etc.
 */
export abstract class Piece {
  protected position: Position;
  constructor(private readonly color: Color, file: File, rank: Rank) {
    this.position = new Position(file, rank);
  }
  /**
   * All subclasses of Piece have to implement canMoveTo method
   * @param position
   */
  abstract canMoveTo(position: Position): boolean;
}
