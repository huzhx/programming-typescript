import { Piece, Position } from './piece';

test('test piece instantiation', () => {
  class King extends Piece {
    canMoveTo(position: Position) {
      let distance = this.position.distanceFrom(position);
      return distance.rank < 2 && distance.file < 2;
    }
  }
  const king = new King('White', 'E', 1);
  expect(king).toBeInstanceOf(Piece);
});
