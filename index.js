var posthtml = require('posthtml');
var objectAssign = require('object-assign');

module.exports = function() {
    return function posthtmlEach(tree) {
        tree.match({ attrs: { each: true }}, function(node) {
            var length = node.attrs && node.attrs.each || 1;
            var content = [];

            delete node.attrs.each;
            //[].fill(content, 0, length).map(node => Object.assign({},node));
            for(var i=0; i < length; i++) content.push(objectAssign({}, node));
            return content;
        });
        return tree;
    };
};
module.exports.process = function (contents, options) {
    return posthtml().use(module.exports(options)).process(contents);
};