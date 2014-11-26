/**
 * Created by zcfrank1st on 11/26/14.
 */
angular.module('chaos-mirror',[])
    .directive('mirror', function () {
    return {
        restrict: 'E',
        template: function(ele, attr) {
            return "<div id='" + attr.name + "' class='" + attr.name +"'</div>";
        },
        scope: {
            data: '=',
            type: '=',
            option: '=' // {labels:['Y']} at least
        },
        link: function (scope, element, attrs) {
            scope.$watch("data",function(newValue,oldValue) {
                draw(scope)
            });

            function draw (scope) {
                $('#'+ attrs.name + ' svg').remove();
                $('#'+ attrs.name + ' div').remove();
                scope.option.data = scope.data;
                scope.option.element = attrs.name;
                var keys = [];
                for (var ele in scope.data[0]) {
                    keys.push(ele);
                }
                scope.option.xkey = keys[0];
                keys.shift();
                scope.option.ykeys = keys;

                if (scope.option.labels.length !== keys.length) {
                    console.log('`labels` is necessary, please check!');
                }

                if (scope.type === 'area') {
                    Morris.Area(scope.option)
                } else if (scope.type === 'bar') {
                    Morris.Bar(scope.option)
                } else if (scope.type === 'line') {
                    Morris.Line(scope.option);
                } else if (scope.type === 'donut') {
                    Morris.Donut(scope.option)
                } else {
                    console.log('error type!!!')
                }
            }

        }
    }
});