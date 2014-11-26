/**
 * Created by zcfrank1st on 11/26/14.
 */
my.controller('test', function ($scope){
    $scope.data = [
        {x: '2010 Q4', y: 3, z: 7, a:6, b:5, c:7,d:12},
        {x: '2011 Q1', y: 3, z: 4, a:6, b:5, c:7,d:12},
        {x: '2011 Q2', y: null, z: 1, a:6, b:5, c:7,d:12},
        {x: '2011 Q3', y: 2, z: 5, a:6, b:5, c:7,d:12},
        {x: '2011 Q4', y: 8, z: 2, a:6, b:5, c:7,d:12},
        {x: '2012 Q1', y: 4, z: 4, a:6, b:5, c:7,d:12}
    ];

    $scope.type = 'area';

    $scope.option = {labels: ['Y', 'Z','A','B', 'C', 'D']};

    $scope.refresh = function () {
        $scope.data = [
            {x: '2010 Q4', y: 3, z: 7},
            {x: '2011 Q1', y: 3, z: 4}
        ];
    };

    $scope.data2 = [
        {x: '2010 Q4', y: 3, z: 7, a:6, b:5, c:7,d:12},
        {x: '2011 Q1', y: 3, z: 4, a:6, b:5, c:7,d:12},
        {x: '2011 Q2', y: null, z: 1, a:6, b:5, c:7,d:12},
        {x: '2011 Q3', y: 2, z: 5, a:6, b:5, c:7,d:12},
        {x: '2011 Q4', y: 8, z: 2, a:6, b:5, c:7,d:12},
        {x: '2012 Q1', y: 4, z: 4, a:6, b:5, c:7,d:12}
    ];

    $scope.type2 = 'bar';

    $scope.option2 = {labels: ['Y', 'Z','A','B', 'C', 'D']};

    $scope.refresh2 = function () {
        $scope.data2 = [
            {x: '2010 Q4', y: 3, z: 7},
            {x: '2011 Q1', y: 3, z: 4}
        ];
    };
});