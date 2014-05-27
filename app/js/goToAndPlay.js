
/**
 * @from int　開始タイムライン
 * @to int　最期のタイムライン
 * @duration 終了までの間隔値　値が大きいほどゆっくりになる。
 * @roop boolean　アニメーションをループさせるか
 * @callback　roopがfalseの時、第二引数(to)のタイムラインに来た時に実行される関数
 */ 
function gotoAndPlay(from, to, duration, roop, callback){
   var keyframes = to - from;
   var interpolation =  duration / keyframes;
   var lastKeyframe = 0;
   var currentKeyframe = 0;
   var _count = 0;
   
   for(var i = 0; i < mesh.morphTargetInfluences.length; i++) {
     mesh.morphTargetInfluences[i] = 0; 
   }
   if(roop)
      _stop = false;
   render = function(){
     var time = _count % duration;
     if(time == duration -1 && !roop) {
       if(callback!=undefined){
           _stop = true;
       callback();
       } 
    }else{
       var keyframe = Math.floor(time / interpolation) + from;
       if(keyframe != currentKeyframe) {
           mesh.morphTargetInfluences[lastKeyframe] = 0;
           mesh.morphTargetInfluences[currentKeyframe] = 1;
           mesh.morphTargetInfluences[keyframe] = 0;
           lastKeyframe = currentKeyframe;
           currentKeyframe = keyframe;
       }
       mesh.morphTargetInfluences[keyframe] = 
           (time % interpolation ) / interpolation;
       mesh.morphTargetInfluences[lastKeyframe] = 
           1 - mesh.morphTargetInfluences[keyframe];

       //meshのy軸を回転させる
       mesh.rotation.y+=0.005;

       //描画を更新
       renderer.render(scene, camera);
       _count++;
       _stop = false;
     }
   };
}
