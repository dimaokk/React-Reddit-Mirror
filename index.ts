function Concat(word1: string, word2: string) {
    return word1.concat(word2)
}

console.log(Concat('Hellow ', "World"))


interface MyHometaskInt {
    howIDoIt: string;
    simeArray: Array<string | number>
    withData: [{
        howIDoIt: string;
        simeArray: Array<string | number>
    }]
}

const MyHometask: MyHometaskInt = {
    howIDoIt: "I Do It Wel",
    simeArray: ["string one", "string two", 42],
    withData: [{ howIDoIt: "I Do It Wel", simeArray: ["string one", 23] }],

}



interface MyArray<T> {
    [N: number]: T;

    reduce<U>(fn: (el: T, val: T, index: number, arr: MyArray<T>) => U): MyArray<U>;
}

interface IHomeTask {
    data: string;
    numbericData: number;
    date: Date;
    externalData: {
        basis: number;
        value: string;
    }
}


type MyPartial<T> = {
    [N in keyof T]: T[N] extends object ? MyPartial<T[N]> : T[N]
}

const homeTask: MyPartial<IHomeTask> = {
    externalData: {
        value: 'win'
    }
}



