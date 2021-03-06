"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * isCollidingTopRight()
 * ---------------------
 * Used to determine whether the top-right of obj1 collides with the bottom
 * of obj2. The objects must have an x1, y1, x2, and y2.
 *
 * @param {CollisionObject} obj1 This is the first object in the collision test.
 * @param {CollisionObject} obj2 This is the second object in the collision test.
 * @return {boolean} Returns whether there is a collision or not.
 */
const isCollidingTopRight = (obj1, obj2) => {
    return (obj1.x1 < obj2.x1 &&
        obj1.x1 < obj2.x2 &&
        obj1.x2 > obj2.x1 &&
        obj1.x2 < obj2.x2 &&
        obj1.y1 > obj2.y1 &&
        obj1.y1 < obj2.y2 &&
        obj1.y2 > obj2.y1 &&
        obj1.y2 > obj2.y2);
};
exports.default = isCollidingTopRight;
//# sourceMappingURL=is-colliding-top-right.js.map