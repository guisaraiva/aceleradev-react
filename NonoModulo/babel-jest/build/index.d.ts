/**
 * Copyright (c) Facebook, Inc. and its affiliates. All Rights Reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Transformer } from '../src/node_modules/@jest/transform';
import { TransformOptions } from '../src/node_modules/@babel/core';
interface BabelJestTransformer extends Transformer {
    canInstrument: true;
}
declare const transformer: BabelJestTransformer & {
    createTransformer: (options?: TransformOptions) => BabelJestTransformer;
};
export = transformer;
//# sourceMappingURL=index.d.ts.map