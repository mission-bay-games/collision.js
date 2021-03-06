import CollisionObject from '../../../shared/models/collision-object';
/**
 * isCollidingMiddleLeft()
 * -----------------------
 * Used to determine whether the left-middle side of obj1 collides with the
 * right side of obj2. The objects must have an x1, y1, x2, and y2. This
 * function will return true only if the collision occurs when the obj2
 * side is larger than the obj1 side.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
declare const isCollidingMiddleLeft: (obj1: CollisionObject, obj2: CollisionObject) => boolean;
export default isCollidingMiddleLeft;
