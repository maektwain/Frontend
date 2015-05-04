define(['Q', 'underscore', 'mifosX'], function (Q) {
    var components = {
        models: [
            'models.ee62c7de'
        ],
        services: [
            'ResourceFactoryProvider',
            'HttpServiceProvider',
            'AuthenticationService',
            'SessionManager',
            'Paginator',
            'UIConfigService'
        ],
        controllers: [
            'controllers.5d6bb47f'
        ],
        filters: [
            'filters.fa2ac2a1'
        ],
        directives: [
            'directives.db66a5b7'
        ]
    };

    return function() {
        var defer = Q.defer();
        require(_.reduce(_.keys(components), function (list, group) {
            return list.concat(_.map(components[group], function (name) {
                return group + "/" + name;
            }));
        }, [
            'routes-initialTasks-webstorage-configuration.81248143'
        ]), function(){
            defer.resolve();
        });
        return defer.promise;
    }
});
