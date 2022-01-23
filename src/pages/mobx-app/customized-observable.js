import { createAtom, autorun } from "mobx"

export class Clock {
    atom
    intervalHandler = null
    currentDateTime

    constructor() {
        // 创建一个atom来与MobX进行交互
        
        this.atom = createAtom(
            // 第一个参数是:
            // - Atom的名称 用于在程序debug时便于观察.
            "Clock",
            // 第二个参数是（可选）:
            // - 在unobserved 变到 observed时的回调函数
            () => this.startTicking(),
            // 第三个参数是（可选）:
            // -  在observed 变到 unobserved时的回调函数
            () => this.stopTicking()
            // 同一个atom在多个状态之间来回变化
        )
    }

    getTime() {
        // 通知MobX这个observable 数据源已经被使用。
        //
        // 如果atom当前状态是 正在被观察（observed），reportObserved将返回true
        // 通过 reaction.在需要时，它会被切换成“startTicking”（开始计时）
        // onBecomeObserved处理函数.
        if (this.atom.reportObserved()) {
            return this.currentDateTime
        } else {
            // 调用了getTime函数，但此时没有任何reaction在运行，隐藏没有人依赖此值。所以并且不会触发startTicking和onBecomeObserved处理程序。
            // 在这种情况下，根据atom的性质，其行为可能会有所不同，例如引发错误，返回默认值等。
            return new Date()
        }
    }

    tick() {
        this.currentDateTime = new Date()
        this.atom.reportChanged() // 通知MobX这个数据源已经更改。
    }

    startTicking() {
        this.tick() // 初始化 tick
        this.intervalHandler = setInterval(() => this.tick(), 1000)
    }

    stopTicking() {
        clearInterval(this.intervalHandler)
        this.intervalHandler = null
    }
}