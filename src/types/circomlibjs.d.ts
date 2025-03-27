declare module 'circomlibjs' {
    export const babyjub: {
        Base8: [bigint, bigint];
        mulPointEscalar: (base: [bigint, bigint], scalar: bigint) => [bigint, bigint];
    };
}