jQuery.sap.declare("<%= moduleName %>.util.FuseUI5");
jQuery.sap.require("<%= moduleName %>.util.Proxy");

/**
 *
 *
 *
 *
 * @class {<%= moduleName %>.util.FuseUI5}
 * @author Boos Edwin.
 * @date 30.11.2016
 * @version: 0.0.1
 *
 *
 *
 *          Makes the fuse library, with SAP/Open-UI5 compatible.
 *          Does instantly update the control on the UI with Fuzzy Results.
 *          And wins by performance with the Proxy pattern.
 *
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
 *
 * Quick Examples:
 *
 * 1. Create an instance of FuseUI5 (highly recommended to do this in the onInit function):
 *
 *
 *
 *      - this.fuseUI5 = new FuseUI5()
 *                          .setThreshold(0.6)
 *                          .setKeys(["Author", "Title"]);
 *
 *  NOTE: You can as well directly pass a options object as well,
 *        to learn more read the constructors js-doc.
 *
 *
 *
 * 2. In your callback liveChange Function:
 *
 *          handleFuzzySearch : function(event) {
 *
 *              // NOTE : We can get binding from Master / Table controls.
 *              var binding = this.getView().byId("masterListId").getBinding("items");
 *              var modelName = "masterBindingId"
 *              var searchTerm = event.getSource().getValue();
 *              var data = binding.getModel().getData();
 *
 *              this.fuseUI5
 *                      .setBindingId(modelName)
 *                      .setBinding(binding)
 *                      .setListOnce(data)
 *                      .search();
 *
 *           }
 *
 *
 */
<%= moduleName %>.util.FuseUI5 = class extends Fuse {
  /**
   *
   * Passes the options and list parameter to the super class Fuse,
   * and automatically initializes a new Object of Proxy.js and provides the
   * passed parameters as well to the Proxy.js class.
   *
   * The list parameter is a data object, in which Fuse should search for.
   * The options parameter structure could look like this:
   *
   *       var options = {
   *
   *          keys : [],
   *          id : "",
   *          caseSensitive : false,
   *          include : [],
   *          shouldSort : true,
   *          searchFn : searchFn,
   *          sortFn : sortFn,
   *          location : 0,
   *          threshold : 0.6,
   *          distance : 100,
   *          maxPatternLength : 32,
   *          verbose : false,
   *          tokenize : false,
   *          tokenSeparator : "",
   *          matchAllTokens : false,
   *          findAllMatches : false,
   *          minMatchCharLength : 1
   *
   *       }
   *
   * If you want to read more about the properties, please see the setter's JS-Doc.
   * or Read here : https://github.com/krisk/Fuse/blob/master/README.md
   *
   *
   * @param list {Array}
   * @param options {Object}
   *
   */
  constructor(list = [], options = {}) {
    super(list, options);
    this.proxy = new <%= moduleName %>.util.Proxy(list, options);
  }

  /**
   *
   * Remove's Pattern, the Binding, List, and the Proxy's cache from the current instance.
   *
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  reset() {
    this.proxy.reset();

    this.resetPattern()
      .resetBinding()
      .resetList();

    return this;
  }

  /**
   *
   * Assign void 0 to the property pattern of current instance's .
   *
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  resetPattern() {
    this.pattern = void 0;
    return this;
  }

  /**
   *
   * Assign void 0 to the property binding of current instance's .
   *
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  resetBinding() {
    this.binding = void 0;
    return this;
  }

  /**
   *
   * Assign void 0 to the property list of current instance's .
   *
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   *
   */
  resetList() {
    this.list = void 0;
    return this;
  }

  /**
   *
   * At what point does the match algorithm give up.
   * A threshold of 0.0 requires a perfect match (of both letters and location),
   * a threshold of 1.0 would match anything.
   *
   * It also supplies the current proxy instance's property: threshold.
   *
   * @param threshold {Number} - defaultValue 0.6
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setThreshold(threshold = 0.6) {
    this.proxy.setThreshold(threshold);
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
   *  It also supplies the current proxy instance's property: keys.
   *
   * @param keys {Array}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setKeys(keys) {
    this.proxy.setKeys(keys);
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
   *  It also supplies the current proxy instance's property: shouldSort.
   *
   * @param shouldSort {Boolean} - defaultValue = true
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setShouldSort(shouldSort = true) {
    this.options.shouldSort = shouldSort;
    return this;
  }

  /**
   *
   * The pattern string to fuzzy search on.
   *  It also supplies the current proxy instance's property: pattern.
   *
   * @param pattern {String}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setPattern(pattern) {
    this.proxy.setPattern(pattern);
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
   *  It also supplies the current proxy instance's property: list.
   *
   * @param list {Array}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setList(list) {
    this.proxy.setList(list);
    this.list = list;
    return this;
  }

  /**
   *
   * The original Data, to which a fuzzy search should be done.
   * Ensures that the list in proxy-class will only be set one time
   *
   * @param list {Array}
   * @returns {<%= moduleName %>.util.Proxy} for method chaining.
   */
  setListOnce(list) {
    this.proxy.setListOnce(list);
    this.list = list;
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
   * It also supplies the current proxy instance id.
   *
   * @param id {String}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setId(id) {
    this.proxy.setId(id);
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
   *  It also supplies the current proxy instance's property: caseSensitive.
   *
   * @param caseSensitive {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setCaseSensitive(caseSensitive = false) {
    this.proxy.setCaseSensitive(caseSensitive);
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
   * It also supplies the current proxy instance's property: include.
   *
   * @param include {Array} - defaultValue = []
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setInclude(include = []) {
    this.proxy.setInclude(include);
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
   * Determines approximately where in the text is the pattern expected to be found.
   *
   * It also supplies the current proxy instance's property: caseSensitive.
   *
   * @param location {Number} - defaultValue = 0
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setLocation(location = 0) {
    this.proxy.setLocation(location);
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
   *  It also supplies the current proxy instance's property: distance.
   *
   * @param distance {Number} - defaultValue = 100
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setDistance(distance = 100) {
    this.proxy.setDistance(distance);
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
   *  It also supplies the current proxy instance's property: maxPatternLength.
   *
   * @param maxPatternLength {Number} - defaultValue = 32
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setMaxPatternLength(maxPatternLength = 32) {
    this.proxy.setMaxPatternLength(maxPatternLength);
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
   * It also supplies the current proxy instance's property: verbose.
   *
   * @param verbose {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setVerbose(verbose = false) {
    this.proxy.setVerbose(verbose);
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
   * It also supplies the current proxy instance's property: tokenSeparator.
   *
   * @param tokenSeparator  {String} - defaultValue = / +/g
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setTokenSeparator(tokenSeparator = / +/g) {
    this.proxy.setTokenSeparator(tokenSeparator);
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
   *  It also supplies the current proxy instance's property: matchAllTokens.
   *
   * @param matchAllTokens {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setMatchAllTokens(matchAllTokens = false) {
    this.proxy.setMatchAllTokens(matchAllTokens);
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
   * It also supplies the current proxy instance's property:  findAllMatches.
   *
   * @param findAllMatches {Boolean} - defaultValue = false
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setFindAllMatches(findAllMatches = false) {
    this.proxy.setFindAllMatches(findAllMatches);
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
   *  It also supplies the current proxy instance's property:  findAllMatches.
   *
   * @param minMatchCharLength {Number} - defaultValue = 1
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setMinMatchCharLength(minMatchCharLength = 1) {
    this.proxy.setMinMatchCharLength(minMatchCharLength);
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
   * It also supplies the current proxy instance's property: searchFn.
   *
   *
   * @param searchFn {Function}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setSearchFn(searchFn) {
    this.proxy.setSearchFn(searchFn);
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
   * It also supplies the current proxy instance's property: sortFn.
   *
   *
   * @param sortFn {Function}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setSortFn(sortFn) {
    this.proxy.setSortFn(sortFn);
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
   * Set's the Threshold property to 0.0 for perfect match.
   *
   * Set's also the Threshold property in the current proxy instance to 0.0
   *
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  activatePerfectMatch() {
    this.setThreshold(0.0);
    this.proxy.setThreshold(0.0);
    return this;
  }

  /**
     * The get function to use when fetching an object's properties.
     * The default will search nested paths ie foo.
     *
     * param obj The object being searched
     * param path The path to the target property
     *
     * Example of Usage:
     *
     * getFn: function (obj, path) {
     *       return obj.get(path);
}    * }
     *
     * @returns {Function}
     */
  getFn() {
    return this.object.getFn;
  }

  /**
   *
   * The modelName/bindingId which was sit's in the binding.
   *
   * @param bindingId {String}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setBindingId(bindingId) {
    this.bindingId = bindingId;
    return this;
  }

  /**
   *
   * Return's the bindingId property which was set to the current instance.
   * If nothing has been passed a empty String will be returned ("")
   *
   * @returns {String}
   */
  getBindingId() {
    return this.bindingId ? this.bindingId : "";
  }

  /**
   *
   * The binding which sit's in the control, with aggregation data.
   * This binding is important for updating the control with the fuse results.
   *
   * @param binding {sap.ui.model.Binding}
   * @returns {<%= moduleName %>.util.FuseUI5} for method chaining.
   */
  setBinding(binding) {
    this.binding = binding;
    return this;
  }

  /**
   *
   * Return's the binding property which was set to the current instance.
   *
   * @returns {sap.ui.model.Binding}
   */
  getBinding() {
    return this.binding;
  }

  /**
   *
   * This function will start a search in the Proxy.js class.
   * And the Proxy.js handles the cache logic and will return the fuseResults.
   * (Please see: Proxy.search() function - for deeper understand).
   * This function  update's (if a binding was passed), the binding
   * of the control, hence the user will instantly see the results on the UI.
   *
   *
   * @param pattern {String} The pattern string to fuzzy search on.
   * @returns {Object} The result data from fuzzy search.
   */
  search(pattern) {
    this.setPattern(pattern);
    return this._updateBinding(this.proxy.search(pattern));
  }

  /**
   *
   * Updates the binding, if binding was previously passed.
   *
   * @private
   * @param fuseResult {Object}
   * @returns fuseResult {Object}
   */
  _updateBinding(fuseResult) {
    if (!this.getBinding()) return fuseResult;

    const binding = this.getBinding();
    const bindingId = this.getBindingId();
    const bindingPath = this.getBinding().getPath();

    binding.getModel(bindingId).setProperty(bindingPath, fuseResult);
    return fuseResult;
  }
};
