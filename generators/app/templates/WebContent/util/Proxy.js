jQuery.sap.declare("<%= moduleName %>.util.Proxy");

/**
 *
 *
 * @class {<%= moduleName %>.util.Proxy}
 * @author Boos Edwin.
 * @date 01.12.2016
 *
 *
 *
 *
 *          A FuseUI5 Proxy class: (Read here to know more about the proxy pattern.
 *          {@link: http://www.dofactory.com/javascript/proxy-design-pattern})
 *
 *          Shout out to the original author for his amazing work with fuse.
 *          Check out his GitHub here {@link: https://github.com/krisk/}
 *          Here you find the repository of fuse on GitHub {@link: https://github.com/krisk/Fuse}
 *
 * @license
 *
 *          Fuse - Lightweight fuzzy-search
 *
 *          Copyright (c) 2012-2016 Kirollos Risk <kirollos@gmail.com>.
 *          All Rights Reserved. Apache Software License 2.0
 *
 *          Licensed under the Apache License, Version 2.0 (the "License")
 *          you may not use this file except in compliance with the License.
 *          You may obtain a copy of the License at
 *
 *          http://www.apache.org/licenses/LICENSE-2.0
 *
 *          Unless required by applicable law or agreed to in writing, software
 *          distributed under the License is distributed on an "AS IS" BASIS,
 *          WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *          See the License for the specific language governing permissions and
 *          limitations under the License.
 *
 *
 */
<%= moduleName %>.util.Proxy = class extends Fuse {
  /**
   *
   * Passes the options and list parameter to the super class Fuse.
   * The list parameter is a data object, in which Fuse should search for.
   * The options parameter
   *
   *
   *
   *
   *
   * @param list {Array}
   * @param options {Object}
   *
   */
  constructor(list = [], options = {}) {
    super(list, options);
    if (!this.cache) this.cache = [];
    this._hasListBeenSet = false;
  }

  /**
   *
   * Reset's the cache-array.
   *
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  reset() {
    this.resetCache();
    this._hasListBeenSet = false;
    return this;
  }

  /**
   *
   * Initialize a new Array
   *
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  resetCache() {
    this.cache = [];
    return this;
  }

  /**
   *
   * At what point does the match algorithm give up.
   * A threshold of 0.0 requires a perfect match (of both letters and location),
   * a threshold of 1.0 would match anything.
   *
   *
   * @param threshold {Number} - defaultValue 0.6
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setThreshold(threshold = 0.6) {
    this.options.threshold = threshold;
    return this;
  }

  /**
   *
   * Return's the threshold of the current instance.
   *
   * @returns {Number}
   */
  getThreshold() {
    return this.options.threshold;
  }

  /**
   *
   * List of properties that will be searched. This also supports nested properties
   *
   * @param keys {Array}
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setKeys(keys) {
    this.options.keys = keys;
    return this;
  }

  /**
   *
   * Return's the keys of the current instance.
   *
   * @returns {Array}
   */
  getKeys() {
    return this.options.keys;
  }

  /**
   *
   * Disable/Enable sorting the list by score.
   *
   * @param shouldSort {Boolean} - defaultValue = true
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setShouldSort(shouldSort = true) {
    this.options.shouldSort = shouldSort;
    return this;
  }

  /**
   *
   * The pattern string to fuzzy search on.
   *
   * @param pattern {String}
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setPattern(pattern) {
    this.pattern = pattern;
    return this;
  }

  /**
   *
   * Return's the pattern property which was set to the current instance.
   * @returns {String}
   */
  getPattern() {
    return this.pattern;
  }

  /**
   *
   * The original Data, to which a fuzzy search should be done.
   *
   * @param list {Array}
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setList(list) {
    this.list = list;
    return this;
  }

  /**
   *
   * The original Data, to which a fuzzy search should be done.
   * Ensures that the list will be only one time set to the instance.
   *
   * @param list {Array}
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setListOnce(list) {
    if (!this._hasListBeenSet) {
      this._hasListBeenSet = true;
      this.list = list;
    }
    return this;
  }

  /**
   *
   * Return's the list property which was set to the current instance.
   *
   * @returns {Array}
   */
  getList() {
    return this.list;
  }

  /**
   *
   * The name of the identifier property. If specified,
   * the returned result will be a list of the items' identifiers,
   * otherwise it will be a list of the items.
   *
   *
   * @param id {String}
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setId(id) {
    this.options.id = id;
    return this;
  }

  /**
   *
   * Return's the id property which was set to the current instance.
   *
   * @returns {String}
   */
  getId() {
    return this.options.id;
  }

  /**
   *
   * Indicates whether comparisons should be case sensitive.
   *
   *
   * @param caseSensitive {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setCaseSensitive(caseSensitive = false) {
    this.options.caseSensitive = caseSensitive;
    return this;
  }

  /**
   *
   * Return's the caseSensitive property which was set to the current instance.
   *
   * @returns {Boolean}
   */
  getCaseSensitive() {
    return this.options.caseSensitive;
  }

  /**
   *
   * An array of values that should be included from the searcher's output.
   * When this array contains elements, each result in the list will be of the form
   * { item: ..., include1: ..., include2: ... }. Values you can include are score, matches.
   *
   * Ex: { include: ['score', 'matches' ] }
   *
   *
   *
   * @param include {Array} - defaultValue = []
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setInclude(include = []) {
    this.options.include = include;
    return this;
  }

  /**
   *
   * Return's the include property which was set to the current instance.
   *
   * @returns {Array}
   */
  getInclude() {
    return this.options.include;
  }

  /**
   *
   * Determines approximately where in the text is the pattern expected to be found
   *
   * @param location {Number} - defaultValue = 0
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setLocation(location = 0) {
    this.options.location = location;
    return this;
  }

  /**
   *
   * Return's the location property which was set to the current instance.
   *
   * @returns {Boolean}
   */
  getLocation() {
    return this.options.location;
  }

  /**
   *
   * Determines how close the match must be to the fuzzy location (specified by location).
   * An exact letter match which is distance characters away from the fuzzy location would
   * score as a complete mismatch. A distance of 0 requires the match be at the exact location specified,
   * a distance of 1000 would require a perfect match to be within 800 characters of
   * the location to be found using a threshold of 0.8.
   *
   * @param distance {Number} - defaultValue = 100
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setDistance(distance = 100) {
    this.options.distance = distance;
    return this;
  }

  /**
   *
   * Return's the distance property which was set to the current instance.
   *
   * @returns {Number}
   */
  getDistance() {
    return this.options.distance;
  }

  /**
   *
   * The maximum length of the pattern. The longer the pattern, the more intensive the search operation will be.
   * Whenever the pattern exceeds the maxPatternLength, an error will be thrown.
   *
   *
   * @param maxPatternLength {Number} - defaultValue = 32
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setMaxPatternLength(maxPatternLength = 32) {
    this.options.maxPatternLength = maxPatternLength;
    return this;
  }

  /**
   *
   * Return's the maxPatternLength property which was set to the current instance.
   *
   * @returns {Number}
   */
  getMaxPatternLength() {
    return this.options.maxPatternLength;
  }

  /**
   *
   * Will print to the console. Useful for debugging.
   *
   * @param verbose {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setVerbose(verbose = false) {
    this.options.verbose = verbose;
    return this;
  }

  /**
   *
   * Return's the verbose property which was set to the current instance.
   *
   * @returns {Boolean}
   */
  getVerbose() {
    return this.options.verbose;
  }

  /**
   *
   * Regex used to separate words when searching. Only applicable when tokenize is true.
   *
   * @param tokenSeparator  {String} - defaultValue = / +/g
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setTokenSeparator(tokenSeparator = / +/g) {
    this.options.tokenSeparator = tokenSeparator;
    return this;
  }

  /**
   *
   * Return's the tokenSeparator property which was set to the current instance.
   *
   * @returns {Boolean}
   */
  getTokenSeparator() {
    return this.options.tokenSeparator;
  }

  /**
   *
   * When true, the result set will only include records that match all tokens.
   * Will only work if tokenize is also true.
   *
   * @param matchAllTokens {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setMatchAllTokens(matchAllTokens = false) {
    this.options.matchAllTokens = matchAllTokens;
    return this;
  }

  /**
   *
   * Return's the matchAllTokens property which was set to the current instance.
   *
   * @returns {Boolean}
   */
  getMatchAllTokens() {
    return this.options.matchAllTokens;
  }

  /**
   *
   * When true, the matching function will continue to the end of a search pattern even if a
   * perfect match has already been located in the string.
   *
   * @param findAllMatches {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setFindAllMatches(findAllMatches = false) {
    this.options.findAllMatches = findAllMatches;
    return this;
  }

  /**
   *
   * Return's the findAllMatches property which was set to the current instance.
   *
   * @returns {Boolean}
   */
  getFindAllMatches() {
    return this.options.findAllMatches;
  }

  /**
   *
   * When set to include matches, only those whose length exceeds this value will be returned.
   * (For instance, if you want to ignore single character index returns, set to 2)
   *
   * @param minMatchCharLength {Number} - defaultValue = 1
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setMinMatchCharLength(minMatchCharLength = 1) {
    this.options.minMatchCharLength = minMatchCharLength;
    return this;
  }

  /**
   *
   * Return's the minMatchCharLength property which was set to the current instance.
   *
   * @returns {Number}
   */
  getMinMatchCharLength() {
    return this.options.minMatchCharLength;
  }

  /**
   *
   * The search function to use.
   * Note that the search function ([[Function]]) must conform to the following API:
   *
   *
   * param: pattern - The pattern string to search
   * param: options - The search option
   * [[Function]].constructor = function(pattern, options) { ... }
   *
   *
   * param: text - the string to search in for the pattern
   * returns Object in the form of { isMatch: boolean, score: Int }
   *
   * [[Function]].prototype.search = function(text) { ... }
   *
   *
   * @param searchFn {Function}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setSearchFn(searchFn) {
    this.options.searchFn = searchFn;
    return this;
  }

  /**
   *
   * Return's the searchFn property which was set to the current instance.
   *
   * @returns {Function}
   */
  getSearchFn() {
    return this.options.searchFn;
  }

  /**
   *
   * The function that is used for sorting the result list.
   *
   * @param sortFn {Function}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setSortFn(sortFn) {
    this.options.sortFn = sortFn;
    return this;
  }

  /**
   *
   * Return's the sortFn property which was set to the current instance.
   *
   * @returns {Function}
   */
  getSortFn() {
    return this.options.sortFn;
  }

  /**
   *
   * The logic:
   * - When the cache is empty:
   *
   *   Add a cache initial entry with current data, and the pattern "" as id.
   *   and immediately do a fuse search, and return the data.
   *
   * - When the cache is not empty:
   *
   *   Try to find the data in the cache by the current pattern / id:
   *
   *    Was it successful or do we have data in the cache?
   *         => Then return the data
   *
   *    Was it unsuccessful or we have nothing found?
   *         => Then search in the super class Fuse, with the current Pattern.
   *         => Now we add fuzzy results and the pattern in the cache.
   *
   *  The pro's of this is Efficiency: But only if we find the result's in the cache.
   *
   * @param pattern {String} The pattern string to fuzzy search on.
   * @returns {Object} The result data from fuzzy search.
   */
  search(pattern) {
    pattern = pattern.toLowerCase();
    if (this.cache.length === 0) {
      this._addResults("", this.getList());
      return super.search(pattern);
    }

    if (this._lookForCachedResult(pattern))
      return this._lookForCachedResult(pattern);
    else {
      var fuseResult = super.search(pattern);
      this._addResults(pattern, fuseResult);
      return fuseResult;
    }
  }

  /**
   *
   * Try's to find the result by given pattern.
   *
   * @param pattern {String} The pattern string to fuzzy search on.
   * @returns {Object} or void 0
   * @private
   */
  _lookForCachedResult(pattern) {
    var cachedFuseResult = void 0;

    jQuery.each(this.cache, index => {
      if (this.cache[index].pattern === pattern)
        cachedFuseResult = this.cache[index].fuseResults;
    });
    return cachedFuseResult;
  }

  /**
   *
   * Add's a entry in the cache ( pattern is here used as a Id to find the associated data ).
   *
   *
   * @param pattern {String} The pattern string to fuzzy search on.
   * @param fuseResults {Object} - the results that we get from super.search() call
   * @private
   */
  _addResults(pattern, fuseResults) {
    this.cache.push({ pattern, fuseResults });
  }
};
