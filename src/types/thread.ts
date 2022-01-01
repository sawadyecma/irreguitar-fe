export interface Thread{
    thNum: ThreadNum
    openNote?: OpenNote
    markedFlets: number[]
}

export type ThreadNum = 1|2|3|4|5|6 

export type OpenNote = number