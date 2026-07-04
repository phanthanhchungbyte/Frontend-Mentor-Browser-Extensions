export type ArrayElement<T extends any[]> = T extends (infer U)[] ? U : never;
