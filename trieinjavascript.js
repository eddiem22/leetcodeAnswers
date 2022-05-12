class Trie  {

constructor(){
this.root = {}
this.root.isWord = false;
}
    
insert = function(word) {
    let current = this.root
    for(var char of word){
        if(!current[char]) current[char] = {}
        current = current[char]
    }
    current.isWord = true;
}

/** 
 * @param {string} word
 * @return {boolean}
 */
search = function(word) {
    let current  = this.root
    for(var char of word){
        if(!current[char]) return false;
        current = current[char]
    }
    return current.isWord ?? false
}

/** 
 * @param {string} prefix
 * @return {boolean}
 */
startsWith = function(prefix) {
    let current  = this.root
    for(var char of prefix){
        if(!current[char]) return false;
        current = current[char]
    }
    return true;
}
}
