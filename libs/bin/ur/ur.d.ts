declare module ur {
    class Point {
        x: number;
        y: number;
        constructor(x?: any, y?: any);
    }
    class Rectangle {
        x: number;
        y: number;
        width: number;
        height: number;
        constructor(x: any, y: any, w: any, h: any);
    }
    class Result {
        /**
         * 如果匹配到则为识别名字，否则返回'No match'
         */
        name: any;
        /**
         * 匹配度
         */
        score: any;
        constructor(name: any, score: any);
    }
    /**
     * Create by richliu1023
     * @date 2016-08-24
     * @email richliu1023@gmail.com
     * @github https://github.com/RichLiu1023
     * @description
     * @url：http://depts.washington.edu/aimgroup/proj/dollar/index.html
     * 手写单笔识别
     */
    class UnistrokeRecognize {
        Origin: Point;
        private Diagonal;
        private HalfDiagonal;
        private _NumPoints;
        private _SquareSize;
        private _AngleRange;
        private _AnglePrecision;
        private _Phi;
        private Unistrokes;
        /**
         * 黄金分割比率
         * @param value
         * @constructor
         */
        Phi: number;
        SquareSize: number;
        /**
         * @returns {number} 弧度
         * @constructor
         */
        /**
         * @param value 角度
         * @constructor
         */
        AngleRange: number;
        AnglePrecision: number;
        /**
         * 最大点数默认64
         * @param value
         * @constructor
         */
        NumPoints: number;
        constructor();
        static create(): UnistrokeRecognize;
        private Unistroke(name, points);
        /**
         * 识别
         * @param points
         * @param useProtractor true:用量角器（快）.false:黄金分割搜索
         * @returns {Result}
         * @constructor
         */
        recognize(points: Point[], useProtractor: boolean): Result;
        addGesture(name: string, points: Point[]): void;
        deleteAllGestures(): void;
        /**
         * 通过name获取Gesture信息
         * @param name 如果不传值，则返回所有的信息
         * @returns {any}
         */
        getGesture(name?: string): Array<{
            Name: string;
            Points: Point[];
            Vector: Point[];
        }>;
        private Resample(points, n);
        private IndicativeAngle(points);
        private RotateBy(points, radians);
        private ScaleTo(points, size);
        private TranslateTo(points, pt);
        private Vectorize(points);
        private OptimalCosineDistance(v1, v2);
        private DistanceAtBestAngle(points, T, a, b, threshold);
        private DistanceAtAngle(points, T, radians);
        private Centroid(points);
        private BoundingBox(points);
        private PathDistance(pts1, pts2);
        private PathLength(points);
        private Distance(p1, p2);
        private Deg2Rad(d);
    }
}
