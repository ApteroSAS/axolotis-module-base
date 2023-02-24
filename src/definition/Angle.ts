export type AngleRad = number;

//https://github.com/photonstorm/phaser/tree/v3.55.2/src/math/angle
export namespace AngleMath {
    /**
     * Gets the shortest angle between `angle1` and `angle2`.
     *
     * Both angles must be in the range -180 to 180, which is the same clamped
     * range that `sprite.angle` uses, so you can pass in two sprite angles to
     * this method and get the shortest angle back between the two of them.
     *
     * The angle returned will be in the same range. If the returned angle is
     * greater than 0 then it's a counter-clockwise rotation, if < 0 then it's
     * a clockwise rotation.
     * @param angleFrom range from -Math.Pi to Pi
     * @param angleTo range from -Math.Pi to Pi
     */
    export function shortestBetween(angleFrom: AngleRad, angleTo: AngleRad) {
        //https://github.com/photonstorm/phaser/blob/v3.55.2/src/math/angle/ShortestBetween.js
        let difference = angleTo - angleFrom;

        if (difference === 0) {
            return 0;
        }

        let times = Math.floor((difference - (-Math.PI)) / (Math.PI * 2));

        return difference - (times * (Math.PI * 2));
    }

    /**
     * Normalize an angle to the [0, 2pi] range.
     *
     * @function Phaser.Math.Angle.Normalize
     * @since 3.0.0
     *
     * @param {number} angle - The angle to normalize, in radians.
     *
     * @return {number} The normalized angle, in radians.
     */
    export function normalize(angle: AngleRad): AngleRad {
        //https://github.com/photonstorm/phaser/blob/v3.55.2/src/math/angle/Normalize.js
        angle = angle % (2 * Math.PI);

        if (angle >= 0) {
            return angle;
        } else {
            return angle + 2 * Math.PI;
        }
    }
}