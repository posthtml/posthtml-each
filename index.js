module.exports = function() {
    return function posthtmlEach(tree) {
        tree.match({ attrs: { each: true }}, function(node) {
            var length = node.attrs && node.attrs.each || 1;
            var content = [];

            delete node.attrs.each;
            for(var i=0; i < length; i++) content.push(Object.assign({}, node));
            return content;
        });
        return tree;
    };
};