class InkTaskStore {
  constructor() {
    this.matchedTerms = []
    this.shouldRenderTask = true
    this.helpData = []
  }

  collectHelpData(args, flags) {
    const parsedArgs = [].concat(args)

    this.helpData.push({
      args: parsedArgs,
      flags,
    })
  }

  hasMatched(term) {
    this.matchedTerms = [...this.matchedTerms, term]
    this.shouldRenderTask = false
  }

  onNewSwitch() {
    this.shouldRenderTask = true
    this.helpData = []
  }
}

const store = new InkTaskStore()

export default store
