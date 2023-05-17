import * as THREE from 'three'

// 立方体
function createGeometry() {
  const scene = new THREE.Scene() // 创建一个场景
  const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000) // 创建一个相机
  const renderer = new THREE.WebGL1Renderer() // 创建一个渲染器
  renderer.setSize(window.innerWidth/2, window.innerHeight/2) // 设置渲染器大小
  document.body.appendChild(renderer.domElement) // 挂载渲染器
  
  
  const geometry = new THREE.BoxGeometry(1, 1, 1) // 创建一个立方体
  const material = new THREE.MeshBasicMaterial({ color: 0xcccccc }) // 创建一种材质
  const cube = new THREE.Mesh(geometry, material) // 创建一个网格，网格包含一个立方体及作用在立方体上的材质
  scene.add(cube) // 将网格物体添加到场景中 （0,0,0） 的坐标位置
  
  camera.position.z = 5 // 相机也默认在 (0,0,0)位置，为了不和立方体重叠，可以将相机向 z 轴移动（向前）
  
  // 创建一个渲染器，能够在每次屏幕刷新时对场景进行绘制的循环（大多数屏幕，刷新率一般 60次/秒）
  function animate() { 
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01
    renderer.render(scene, camera)
  }
  animate()
}
// createGeometry()

// 创建线
function createLine() {
  // 创建场景
  const scene = new THREE.Scene()
  // 创建摄像机
  const camera = new THREE.PerspectiveCamera(45, window.innerWidth/window.innerHeight, 1, 500 )
  // 设置摄像机的位置
  camera.position.set(0,0,100)
  // 摄像机朝向位置
  camera.lookAt(0,0,0)
  // 创建渲染器
  const renderer = new THREE.WebGL1Renderer()
  // 设置渲染器大小
  renderer.setSize(window.innerWidth/2, window.innerHeight/2)
  // 挂载渲染器
  document.body.appendChild(renderer.domElement)

  

  // 创建材质
  const material = new THREE.LineBasicMaterial({color: 0xff0000 })
  // 定义几个顶点的几何体
  const points = []
  points.push(new THREE.Vector3(-10, 0, 0))
  points.push(new THREE.Vector3(0, 5, 0))
  points.push(new THREE.Vector3(20, 0, 0))
  const geometry = new THREE.BufferGeometry().setFromPoints(points)
  // 形成线(几何体+材质)
  const line = new THREE.Line(geometry, material)

  // 场景中添加线
  scene.add(line)
  // 调用渲染函数
  renderer.render(scene, camera)
}

// createLine()


function fun() {
  
}