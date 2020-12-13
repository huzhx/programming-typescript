/**
 * Since there are relatively few colors, ranks, and files,
 * we can manually enumerate their possible values as type literals.
 */
type Color = 'Black' | 'White'
type File = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | 'H'
type Rank = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

class Position {
  constructor(
    private file: File,
    private rank: Rank
  ){}
}

/**
 * Don't want users to instantiate the Piece class directly.
 * We want them to extend it to create a Queen, Bishop, and etc.
 */
abstract class Piece {
  protected position: Position
  constructor(
    private readonly color: Color,
    file: File,
    rank: Rank
  ) {
    this.position = new Position(file, rank)
  }
}


