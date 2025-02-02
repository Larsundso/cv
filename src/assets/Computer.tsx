/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 Computer.glb -t s 
*/

import * as THREE from "three";
import React from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type ActionName =
 | "FAN blades.002Action.001"
 | "FAN.001Action.001"
 | "RotorAction"
 | "BubleAction"
 | "FAN bladesAction.002"
 | "FAN blades.001Action.001"
 | "FAN.ThermaltakeAction";

interface GLTFAction extends THREE.AnimationClip {
 name: ActionName;
}

type GLTFResult = GLTF & {
 nodes: {
  Cylinder029: THREE.Mesh;
  Cylinder029_1: THREE.Mesh;
  Cylinder033: THREE.Mesh;
  Cylinder033_1: THREE.Mesh;
  Cylinder032: THREE.Mesh;
  Cylinder032_1: THREE.Mesh;
  Plane024: THREE.Mesh;
  Plane024_1: THREE.Mesh;
  Plane024_2: THREE.Mesh;
  BezierCurve002: THREE.Mesh;
  m2_platine_rückseite004: THREE.Mesh;
  m2_platine_rückseite004_1: THREE.Mesh;
  m2_platine_rückseite004_2: THREE.Mesh;
  m2_platine_rückseite004_3: THREE.Mesh;
  vorne1002: THREE.Mesh;
  vorne1002_1: THREE.Mesh;
  vorne1002_2: THREE.Mesh;
  vorne1002_3: THREE.Mesh;
  vorne1002_4: THREE.Mesh;
  Cylinder030: THREE.Mesh;
  Cylinder030_1: THREE.Mesh;
  Cylinder030_2: THREE.Mesh;
  Cylinder030_3: THREE.Mesh;
  Cylinder030_4: THREE.Mesh;
  Cube082: THREE.Mesh;
  Cube082_1: THREE.Mesh;
  Kühlkörper_003: THREE.Mesh;
  Kühlkörper_003_1: THREE.Mesh;
  ["IMG6770_(1)-edit"]: THREE.Mesh;
  ["IMG6770_(1)-edit_1"]: THREE.Mesh;
  ["IMG6770_(1)-edit_2"]: THREE.Mesh;
  ["IMG6770_(1)-edit_3"]: THREE.Mesh;
  ["IMG6770_(1)-edit_4"]: THREE.Mesh;
  ["IMG6770_(1)-edit_5"]: THREE.Mesh;
  ["IMG6770_(1)-edit_6"]: THREE.Mesh;
  ["IMG6770_(1)-edit_7"]: THREE.Mesh;
  ["IMG6770_(1)-edit_8"]: THREE.Mesh;
  ["IMG6770_(1)-edit_9"]: THREE.Mesh;
  ["IMG6770_(1)-edit_10"]: THREE.Mesh;
  ["IMG6770_(1)-edit_11"]: THREE.Mesh;
  ["IMG6770_(1)-edit_12"]: THREE.Mesh;
  oben1A002: THREE.Mesh;
  oben1A002_1: THREE.Mesh;
  oben1A002_2: THREE.Mesh;
  plug001: THREE.Mesh;
  Cube055: THREE.Mesh;
  Cube055_1: THREE.Mesh;
  Cube055_2: THREE.Mesh;
  Shield: THREE.Mesh;
  Sockel_Base: THREE.Mesh;
  serveimage_platinex028001: THREE.Mesh;
  serveimage_platinex028001_1: THREE.Mesh;
  Sphere: THREE.Mesh;
  BezierCurve044: THREE.Mesh;
  BezierCurve044_1: THREE.Mesh;
  ["Cable_power_buton-etc"]: THREE.Mesh;
  Cube: THREE.Mesh;
  fan_case003: THREE.Mesh;
  Cylinder031: THREE.Mesh;
  Cylinder031_1: THREE.Mesh;
  Cable007: THREE.Mesh;
  Fuss02001: THREE.Mesh;
  glass_pane001honeycomb: THREE.Mesh;
  KnöpfeCase_Bench_torso003: THREE.Mesh;
  ["LED-stipe003"]: THREE.Mesh;
  ["LED-stripe-conektor003"]: THREE.Mesh;
  ["2080tibackplate_6-edit2003"]: THREE.Mesh;
  ["2080tibackplate_6-edit2003_1"]: THREE.Mesh;
  ["2080tibackplate_6-edit2003_2"]: THREE.Mesh;
  ["2080tibackplate_6-edit2003_3"]: THREE.Mesh;
  backplate001_Kappe: THREE.Mesh;
  FAN002: THREE.Mesh;
  ["PCB-Front-1-editk001"]: THREE.Mesh;
  ["PCB-Front-1-editk001_1"]: THREE.Mesh;
  ["PCB-Front-1-editk001_2"]: THREE.Mesh;
  ["PCB-Front-1-editk001_3"]: THREE.Mesh;
  ["PCB-Front-1-editk001_4"]: THREE.Mesh;
  ["PCB-Front-1-editk001_5"]: THREE.Mesh;
  ["PCB-Front-1-editk001_6"]: THREE.Mesh;
  ["serveimage_(1)-gigapixel002"]: THREE.Mesh;
  ["serveimage_(1)-gigapixel002_1"]: THREE.Mesh;
  ["serveimage_(1)-gigapixel002_2"]: THREE.Mesh;
  ["serveimage_(1)-gigapixel002_3"]: THREE.Mesh;
  pump_Rotor: THREE.Mesh;
  Buble: THREE.Mesh;
  Radiator: THREE.Mesh;
  ["29113988013"]: THREE.Mesh;
  ["29113988013_1"]: THREE.Mesh;
  ["29113988013_2"]: THREE.Mesh;
  ["29113988013_3"]: THREE.Mesh;
  ["29113988013_4"]: THREE.Mesh;
  ["29113988013_5"]: THREE.Mesh;
  ["29113988013_6"]: THREE.Mesh;
  ["29113988013_7"]: THREE.Mesh;
  ["29113988013_8"]: THREE.Mesh;
  ["29113988013_9"]: THREE.Mesh;
  ["29113988013_10"]: THREE.Mesh;
  ["29113988013_11"]: THREE.Mesh;
  ["29113988013_12"]: THREE.Mesh;
  ["29113988013_13"]: THREE.Mesh;
  FANThermaltake: THREE.Mesh;
 };
 materials: {
  PaletteMaterial018: THREE.MeshStandardMaterial;
  PaletteMaterial021: THREE.MeshStandardMaterial;
  PaletteMaterial004: THREE.MeshStandardMaterial;
  stiker_vorne: THREE.MeshStandardMaterial;
  PaletteMaterial001: THREE.MeshStandardMaterial;
  ["Gold.Steel.007"]: THREE.MeshStandardMaterial;
  PaletteMaterial002: THREE.MeshStandardMaterial;
  PaletteMaterial003: THREE.MeshStandardMaterial;
  ["m2_platine_rückseite.001"]: THREE.MeshStandardMaterial;
  ["Corsair-MP600.001"]: THREE.MeshStandardMaterial;
  PaletteMaterial005: THREE.MeshStandardMaterial;
  ["vorne1.001"]: THREE.MeshStandardMaterial;
  ["hinten_1.001"]: THREE.MeshStandardMaterial;
  ["hx-product-memory-predator-rgb-ddr4-hx429c15pb3a8-1-zm-lg.001"]: THREE.MeshStandardMaterial;
  ["Steel_Gebürsted.Dunkel.004"]: THREE.MeshStandardMaterial;
  ["RGB.004"]: THREE.MeshStandardMaterial;
  ["I0zvKoe4okgHkE3s_setting_fff_1_90_end_1000-edit"]: THREE.MeshPhysicalMaterial;
  ["Steel_Gebürsted.009"]: THREE.MeshStandardMaterial;
  ["Mainboard_oben.Metal.01"]: THREE.MeshStandardMaterial;
  PaletteMaterial006: THREE.MeshStandardMaterial;
  PaletteMaterial007: THREE.MeshStandardMaterial;
  ["Grau2.Metall"]: THREE.MeshStandardMaterial;
  ["Steel_Gebürsted.Mittel001"]: THREE.MeshStandardMaterial;
  Kühlkörper_gross_grau: THREE.MeshStandardMaterial;
  ["Material.065"]: THREE.MeshStandardMaterial;
  ["Mainboard_oben.004"]: THREE.MeshStandardMaterial;
  Mainboard_unten: THREE.MeshStandardMaterial;
  ["Material.010"]: THREE.MeshStandardMaterial;
  PaletteMaterial010: THREE.MeshPhysicalMaterial;
  digi: THREE.MeshStandardMaterial;
  PaletteMaterial011: THREE.MeshStandardMaterial;
  ["Mainboard_oben.original"]: THREE.MeshStandardMaterial;
  Grau: THREE.MeshStandardMaterial;
  PaletteMaterial008: THREE.MeshStandardMaterial;
  ["serveimage platinex028"]: THREE.MeshStandardMaterial;
  PaletteMaterial009: THREE.MeshStandardMaterial;
  ["Mainboard_oben.Metal.002"]: THREE.MeshStandardMaterial;
  PaletteMaterial012: THREE.MeshStandardMaterial;
  oben1A: THREE.MeshPhysicalMaterial;
  Grau2: THREE.MeshStandardMaterial;
  ["oben1A.Steel"]: THREE.MeshPhysicalMaterial;
  PaletteMaterial013: THREE.MeshStandardMaterial;
  ["Material.012"]: THREE.MeshStandardMaterial;
  ["Material.013"]: THREE.MeshStandardMaterial;
  ["Material.014"]: THREE.MeshStandardMaterial;
  ["ASUS_ROG_Strix_X470-I_11AAA"]: THREE.MeshStandardMaterial;
  ["Mainboard_unten.Metal"]: THREE.MeshStandardMaterial;
  PaletteMaterial014: THREE.MeshPhysicalMaterial;
  PaletteMaterial015: THREE.MeshPhysicalMaterial;
  ["Battery.001"]: THREE.MeshStandardMaterial;
  ["Cable_Mainboard_x8_rot.001"]: THREE.MeshStandardMaterial;
  Cable_VGA_x8_Gelb: THREE.MeshStandardMaterial;
  ["Kabel_schlauch.001"]: THREE.MeshStandardMaterial;
  ["Stecker.003"]: THREE.MeshStandardMaterial;
  stiker_hinten: THREE.MeshStandardMaterial;
  PaletteMaterial016: THREE.MeshStandardMaterial;
  ["Steel_Gebürsted.013"]: THREE.MeshStandardMaterial;
  PaletteMaterial017: THREE.MeshPhysicalMaterial;
  ["28658783"]: THREE.MeshStandardMaterial;
  led_stripe1: THREE.MeshStandardMaterial;
  ["Sticker000.001"]: THREE.MeshStandardMaterial;
  ["Sticker001.001"]: THREE.MeshStandardMaterial;
  ["Aufkleber_Fan.001"]: THREE.MeshStandardMaterial;
  PaletteMaterial019: THREE.MeshStandardMaterial;
  PaletteMaterial020: THREE.MeshStandardMaterial;
  ["PCB-Front-1-editk.001"]: THREE.MeshStandardMaterial;
  ["PCB-Back-editk.001"]: THREE.MeshStandardMaterial;
  ["PCB-Front-1-editk.Metal.001"]: THREE.MeshStandardMaterial;
  ["Material.063"]: THREE.MeshStandardMaterial;
  PaletteMaterial023: THREE.MeshStandardMaterial;
  ["geforce-rtx-asfafsdds-edit2.001"]: THREE.MeshStandardMaterial;
  PaletteMaterial022: THREE.MeshStandardMaterial;
  Fuß_metal: THREE.MeshPhysicalMaterial;
  ["RGB.005"]: THREE.MeshPhysicalMaterial;
  PaletteMaterial024: THREE.MeshPhysicalMaterial;
  ["Material.026"]: THREE.MeshStandardMaterial;
  PaletteMaterial025: THREE.MeshPhysicalMaterial;
  ["Material.066"]: THREE.MeshPhysicalMaterial;
  ["Gehäuse_grau.Stecker"]: THREE.MeshStandardMaterial;
  ["Gehäuse_grau.Stecker.rOT"]: THREE.MeshStandardMaterial;
  ["Gehäuse_grau.Front"]: THREE.MeshStandardMaterial;
  PaletteMaterial027: THREE.MeshPhysicalMaterial;
  ["Gehäuse_grau.Folie"]: THREE.MeshStandardMaterial;
  ["Gehäuse_grau.Stecker.metal"]: THREE.MeshStandardMaterial;
  Platine_lehr: THREE.MeshStandardMaterial;
  ["Material.018"]: THREE.MeshStandardMaterial;
  ["23700007.002"]: THREE.MeshStandardMaterial;
  ["RGB.003"]: THREE.MeshStandardMaterial;
  ["29113991.002"]: THREE.MeshStandardMaterial;
  PaletteMaterial026: THREE.MeshPhysicalMaterial;
  PaletteMaterial028: THREE.MeshStandardMaterial;
  PaletteMaterial029: THREE.MeshStandardMaterial;
 };
 animations: GLTFAction[];
};

export default function Model(props: JSX.IntrinsicElements["group"]) {
 const group = React.useRef<THREE.Group>();

 const { nodes, materials, animations } = useGLTF(
  "/Computer.glb"
 ) as GLTFResult;
 const { actions } = useAnimations(animations, group);

 React.useEffect(() => {
  if (animations && actions) {
   Object.values(actions).forEach((action) => {
    if (action) {
     action.timeScale = 3;
     action.play();
     action.setLoop(THREE.LoopRepeat, Infinity);
    }
   });
  }

  return () => {
   if (actions) {
    Object.values(actions).forEach((action) => {
     if (action) {
      action.stop();
     }
    });
   }
  };
 }, [actions, animations]);

 return (
  <group ref={group} {...props} dispose={null}>
   <group name="Scene">
    <group
     name="Nvidia_Geforce_RTX_2080_ti"
     position={[-0.181, 0.229, -0.057]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <group
      name="FAN001"
      position={[0.006, 0.055, 0.023]}
      rotation={[-Math.PI / 2, 0, 0]}
     >
      <mesh
       name="Cylinder029"
       geometry={nodes.Cylinder029.geometry}
       material={materials.PaletteMaterial018}
      />
      <mesh
       name="Cylinder029_1"
       geometry={nodes.Cylinder029_1.geometry}
       material={materials.PaletteMaterial021}
      />
     </group>
    </group>
    <group name="fan_case001" position={[0.12, 0.297, -0.036]}>
     <group name="FAN_blades">
      <mesh
       name="Cylinder033"
       geometry={nodes.Cylinder033.geometry}
       material={materials.PaletteMaterial004}
      />
      <mesh
       name="Cylinder033_1"
       geometry={nodes.Cylinder033_1.geometry}
       material={materials.stiker_vorne}
      />
     </group>
    </group>
    <group name="fan_case002" position={[0.12, 0.179, -0.036]}>
     <group name="FAN_blades001">
      <mesh
       name="Cylinder032"
       geometry={nodes.Cylinder032.geometry}
       material={materials.PaletteMaterial004}
      />
      <mesh
       name="Cylinder032_1"
       geometry={nodes.Cylinder032_1.geometry}
       material={materials.stiker_vorne}
      />
     </group>
    </group>
    <group
     name="aNTENE001"
     position={[-0.241, 0.273, -0.036]}
     rotation={[-0.831, 0, 0]}
    >
     <mesh
      name="Plane024"
      geometry={nodes.Plane024.geometry}
      material={materials.PaletteMaterial001}
     />
     <mesh
      name="Plane024_1"
      geometry={nodes.Plane024_1.geometry}
      material={materials["Gold.Steel.007"]}
     />
     <mesh
      name="Plane024_2"
      geometry={nodes.Plane024_2.geometry}
      material={materials.PaletteMaterial002}
     />
    </group>
    <mesh
     name="BezierCurve002"
     geometry={nodes.BezierCurve002.geometry}
     material={materials.PaletteMaterial003}
     position={[-0.208, 0.299, -0.002]}
     rotation={[Math.PI / 2, 0, 0]}
    />
    <group
     name="Corsair-M2_Boden"
     position={[-0.151, 0.308, -0.067]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="m2_platine_rückseite004"
      geometry={nodes.m2_platine_rückseite004.geometry}
      material={materials["m2_platine_rückseite.001"]}
     />
     <mesh
      name="m2_platine_rückseite004_1"
      geometry={nodes.m2_platine_rückseite004_1.geometry}
      material={materials["Corsair-MP600.001"]}
     />
     <mesh
      name="m2_platine_rückseite004_2"
      geometry={nodes.m2_platine_rückseite004_2.geometry}
      material={materials.PaletteMaterial004}
     />
     <mesh
      name="m2_platine_rückseite004_3"
      geometry={nodes.m2_platine_rückseite004_3.geometry}
      material={materials.PaletteMaterial005}
     />
    </group>
    <group
     name="Hyper_xRAM_DDR4"
     position={[-0.094, 0.309, -0.06]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="vorne1002"
      geometry={nodes.vorne1002.geometry}
      material={materials["vorne1.001"]}
     />
     <mesh
      name="vorne1002_1"
      geometry={nodes.vorne1002_1.geometry}
      material={materials["hinten_1.001"]}
     />
     <mesh
      name="vorne1002_2"
      geometry={nodes.vorne1002_2.geometry}
      material={
       materials[
        "hx-product-memory-predator-rgb-ddr4-hx429c15pb3a8-1-zm-lg.001"
       ]
      }
     />
     <mesh
      name="vorne1002_3"
      geometry={nodes.vorne1002_3.geometry}
      material={materials["Steel_Gebürsted.Dunkel.004"]}
     />
     <mesh
      name="vorne1002_4"
      geometry={nodes.vorne1002_4.geometry}
      material={materials["RGB.004"]}
     />
    </group>
    <group
     name="IO_Wlan"
     position={[-0.241, 0.274, -0.06]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="Cylinder030"
      geometry={nodes.Cylinder030.geometry}
      material={materials["I0zvKoe4okgHkE3s_setting_fff_1_90_end_1000-edit"]}
     />
     <mesh
      name="Cylinder030_1"
      geometry={nodes.Cylinder030_1.geometry}
      material={materials["Steel_Gebürsted.009"]}
     />
     <mesh
      name="Cylinder030_2"
      geometry={nodes.Cylinder030_2.geometry}
      material={materials["Mainboard_oben.Metal.01"]}
     />
     <mesh
      name="Cylinder030_3"
      geometry={nodes.Cylinder030_3.geometry}
      material={materials.PaletteMaterial006}
     />
     <mesh
      name="Cylinder030_4"
      geometry={nodes.Cylinder030_4.geometry}
      material={materials.PaletteMaterial007}
     />
    </group>
    <group
     name="KühlkörperKlein"
     position={[-0.16, 0.248, -0.063]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="Cube082"
      geometry={nodes.Cube082.geometry}
      material={materials["Grau2.Metall"]}
      position={[0, -0.0005, 0]}
     />
     <mesh
      name="Cube082_1"
      geometry={nodes.Cube082_1.geometry}
      material={materials["Steel_Gebürsted.Mittel001"]}
     />
    </group>
    <group
     name="Kühlkörper_Gross"
     position={[-0.219, 0.337, -0.075]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="Kühlkörper_003"
      geometry={nodes.Kühlkörper_003.geometry}
      material={materials.Kühlkörper_gross_grau}
     />
     <mesh
      name="Kühlkörper_003_1"
      geometry={nodes.Kühlkörper_003_1.geometry}
      material={materials["Material.065"]}
     />
    </group>
    <group
     name="Mainbord"
     position={[-0.151, 0.308, -0.067]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="IMG6770_(1)-edit"
      geometry={nodes["IMG6770_(1)-edit"].geometry}
      material={materials["Mainboard_oben.004"]}
     />
     <mesh
      name="IMG6770_(1)-edit_1"
      geometry={nodes["IMG6770_(1)-edit_1"].geometry}
      material={materials.Mainboard_unten}
     />
     <mesh
      name="IMG6770_(1)-edit_2"
      geometry={nodes["IMG6770_(1)-edit_2"].geometry}
      material={materials["Material.010"]}
     />
     <mesh
      name="IMG6770_(1)-edit_3"
      geometry={nodes["IMG6770_(1)-edit_3"].geometry}
      material={materials.PaletteMaterial010}
     />
     <mesh
      name="IMG6770_(1)-edit_4"
      geometry={nodes["IMG6770_(1)-edit_4"].geometry}
      material={materials.digi}
     />
     <mesh
      name="IMG6770_(1)-edit_5"
      geometry={nodes["IMG6770_(1)-edit_5"].geometry}
      material={materials.PaletteMaterial011}
     />
     <mesh
      name="IMG6770_(1)-edit_6"
      geometry={nodes["IMG6770_(1)-edit_6"].geometry}
      material={materials["Mainboard_oben.original"]}
     />
     <mesh
      name="IMG6770_(1)-edit_7"
      geometry={nodes["IMG6770_(1)-edit_7"].geometry}
      material={materials.Grau}
     />
     <mesh
      name="IMG6770_(1)-edit_8"
      geometry={nodes["IMG6770_(1)-edit_8"].geometry}
      material={materials.PaletteMaterial008}
     />
     <mesh
      name="IMG6770_(1)-edit_9"
      geometry={nodes["IMG6770_(1)-edit_9"].geometry}
      material={materials["serveimage platinex028"]}
     />
     <mesh
      name="IMG6770_(1)-edit_10"
      geometry={nodes["IMG6770_(1)-edit_10"].geometry}
      material={materials.PaletteMaterial009}
     />
     <mesh
      name="IMG6770_(1)-edit_11"
      geometry={nodes["IMG6770_(1)-edit_11"].geometry}
      material={materials["Mainboard_oben.Metal.002"]}
     />
     <mesh
      name="IMG6770_(1)-edit_12"
      geometry={nodes["IMG6770_(1)-edit_12"].geometry}
      material={materials.PaletteMaterial012}
     />
    </group>
    <group
     name="PCI_Express16"
     position={[-0.145, 0.229, -0.059]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="oben1A002"
      geometry={nodes.oben1A002.geometry}
      material={materials.oben1A}
     />
     <mesh
      name="oben1A002_1"
      geometry={nodes.oben1A002_1.geometry}
      material={materials.Grau2}
     />
     <mesh
      name="oben1A002_2"
      geometry={nodes.oben1A002_2.geometry}
      material={materials["oben1A.Steel"]}
     />
    </group>
    <mesh
     name="plug001"
     geometry={nodes.plug001.geometry}
     material={materials.PaletteMaterial013}
     position={[-0.07, 0.32, -0.061]}
     rotation={[0, 0, -Math.PI / 2]}
    />
    <group
     name="RYZEN7_LOWPOLY"
     position={[-0.15, 0.321, -0.067]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="Cube055"
      geometry={nodes.Cube055.geometry}
      material={materials["Material.012"]}
     />
     <mesh
      name="Cube055_1"
      geometry={nodes.Cube055_1.geometry}
      material={materials["Material.013"]}
     />
     <mesh
      name="Cube055_2"
      geometry={nodes.Cube055_2.geometry}
      material={materials["Material.014"]}
     />
    </group>
    <mesh
     name="Shield"
     geometry={nodes.Shield.geometry}
     material={materials["ASUS_ROG_Strix_X470-I_11AAA"]}
     position={[-0.238, 0.315, -0.049]}
     rotation={[Math.PI / 2, 0, 0]}
    />
    <mesh
     name="Sockel_Base"
     geometry={nodes.Sockel_Base.geometry}
     material={materials["Mainboard_unten.Metal"]}
     position={[-0.151, 0.308, -0.067]}
     rotation={[Math.PI / 2, 0, 0]}
    />
    <group
     name="Sound_board"
     position={[-0.176, 0.252, -0.058]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="serveimage_platinex028001"
      geometry={nodes.serveimage_platinex028001.geometry}
      material={materials.PaletteMaterial014}
     />
     <mesh
      name="serveimage_platinex028001_1"
      geometry={nodes.serveimage_platinex028001_1.geometry}
      material={materials.PaletteMaterial015}
     />
    </group>
    <mesh
     name="Sphere"
     geometry={nodes.Sphere.geometry}
     material={materials["Battery.001"]}
     position={[-0.203, 0.283, -0.055]}
     rotation={[Math.PI / 2, 0, 0]}
    />
    <group name="BezierCurve006" position={[0.011, 0.247, 0.102]}>
     <mesh
      name="BezierCurve044"
      geometry={nodes.BezierCurve044.geometry}
      material={materials["Cable_Mainboard_x8_rot.001"]}
     />
     <mesh
      name="BezierCurve044_1"
      geometry={nodes.BezierCurve044_1.geometry}
      material={materials.Cable_VGA_x8_Gelb}
     />
    </group>
    <mesh
     name="Cable_power_buton-etc"
     geometry={nodes["Cable_power_buton-etc"].geometry}
     material={materials["Kabel_schlauch.001"]}
     position={[-0.078, 0.32, -0.061]}
    />
    <mesh
     name="Cube"
     geometry={nodes.Cube.geometry}
     material={materials["Stecker.003"]}
     position={[-0.08, 0.144, -0.047]}
    />
    <mesh
     name="fan_case003"
     geometry={nodes.fan_case003.geometry}
     material={materials.stiker_hinten}
     position={[-0.227, 0.313, 0.037]}
    >
     <group name="FAN_blades002">
      <mesh
       name="Cylinder031"
       geometry={nodes.Cylinder031.geometry}
       material={materials.PaletteMaterial004}
      />
      <mesh
       name="Cylinder031_1"
       geometry={nodes.Cylinder031_1.geometry}
       material={materials.stiker_vorne}
      />
     </group>
    </mesh>
    <mesh
     name="Cable007"
     geometry={nodes.Cable007.geometry}
     material={materials.PaletteMaterial016}
     position={[-0.221, 0.335, -0.011]}
    />
    <mesh
     name="Fuss02001"
     geometry={nodes.Fuss02001.geometry}
     material={materials["Steel_Gebürsted.013"]}
     position={[0.167, 0.05, -0.075]}
    />
    <mesh
     name="glass_pane001honeycomb"
     geometry={nodes.glass_pane001honeycomb.geometry}
     material={materials.PaletteMaterial017}
     position={[-0.031, 0.216, 0.113]}
    />
    <mesh
     name="KnöpfeCase_Bench_torso003"
     geometry={nodes.KnöpfeCase_Bench_torso003.geometry}
     material={materials["28658783"]}
     position={[0.21, 0.328, -0.095]}
    />
    <mesh
     name="LED-stipe003"
     geometry={nodes["LED-stipe003"].geometry}
     material={materials.led_stripe1}
     position={[-0.021, 0.416, -0.075]}
     rotation={[3.054, 0, Math.PI]}
    />
    <mesh
     name="LED-stripe-conektor003"
     geometry={nodes["LED-stripe-conektor003"].geometry}
     material={materials.PaletteMaterial018}
     position={[-0.121, 0.416, -0.074]}
     rotation={[3.054, 0, 0]}
     scale={[-1, 1, 1]}
    />
    <group
     name="backplate"
     position={[-0.132, 0.228, -0.003]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="2080tibackplate_6-edit2003"
      geometry={nodes["2080tibackplate_6-edit2003"].geometry}
      material={materials["Sticker000.001"]}
     />
     <mesh
      name="2080tibackplate_6-edit2003_1"
      geometry={nodes["2080tibackplate_6-edit2003_1"].geometry}
      material={materials["Sticker001.001"]}
     />
     <mesh
      name="2080tibackplate_6-edit2003_2"
      geometry={nodes["2080tibackplate_6-edit2003_2"].geometry}
      material={materials["Aufkleber_Fan.001"]}
     />
     <mesh
      name="2080tibackplate_6-edit2003_3"
      geometry={nodes["2080tibackplate_6-edit2003_3"].geometry}
      material={materials.PaletteMaterial019}
     />
    </group>
    <mesh
     name="backplate001_Kappe"
     geometry={nodes.backplate001_Kappe.geometry}
     material={materials.PaletteMaterial020}
     position={[-0.193, 0.231, 0.047]}
     rotation={[-Math.PI, 0, 0]}
    />
    <mesh
     name="FAN002"
     geometry={nodes.FAN002.geometry}
     material={materials.PaletteMaterial021}
     position={[-0.03, 0.206, -0.002]}
    />
    <group
     name="PCB"
     position={[-0.132, 0.229, -0.003]}
     rotation={[Math.PI / 2, 0, 0]}
    >
     <mesh
      name="PCB-Front-1-editk001"
      geometry={nodes["PCB-Front-1-editk001"].geometry}
      material={materials["PCB-Front-1-editk.001"]}
     />
     <mesh
      name="PCB-Front-1-editk001_1"
      geometry={nodes["PCB-Front-1-editk001_1"].geometry}
      material={materials["PCB-Back-editk.001"]}
     />
     <mesh
      name="PCB-Front-1-editk001_2"
      geometry={nodes["PCB-Front-1-editk001_2"].geometry}
      material={materials["PCB-Front-1-editk.Metal.001"]}
     />
     <mesh
      name="PCB-Front-1-editk001_3"
      geometry={nodes["PCB-Front-1-editk001_3"].geometry}
      material={materials["Material.063"]}
     />
     <mesh
      name="PCB-Front-1-editk001_4"
      geometry={nodes["PCB-Front-1-editk001_4"].geometry}
      material={materials.PaletteMaterial023}
     />
     <mesh
      name="PCB-Front-1-editk001_5"
      geometry={nodes["PCB-Front-1-editk001_5"].geometry}
      material={materials["geforce-rtx-asfafsdds-edit2.001"]}
     />
     <mesh
      name="PCB-Front-1-editk001_6"
      geometry={nodes["PCB-Front-1-editk001_6"].geometry}
      material={materials.PaletteMaterial022}
     />
    </group>
    <group
     name="cpu_heatsink"
     position={[-0.149, 0.322, -0.062]}
     rotation={[Math.PI / 2, -Math.PI / 2, 0]}
    >
     <mesh
      name="serveimage_(1)-gigapixel002"
      geometry={nodes["serveimage_(1)-gigapixel002"].geometry}
      material={materials.Fuß_metal}
     />
     <mesh
      name="serveimage_(1)-gigapixel002_1"
      geometry={nodes["serveimage_(1)-gigapixel002_1"].geometry}
      material={materials["RGB.005"]}
     />
     <mesh
      name="serveimage_(1)-gigapixel002_2"
      geometry={nodes["serveimage_(1)-gigapixel002_2"].geometry}
      material={materials.PaletteMaterial024}
     />
     <mesh
      name="serveimage_(1)-gigapixel002_3"
      geometry={nodes["serveimage_(1)-gigapixel002_3"].geometry}
      material={materials["Material.026"]}
     />
     <mesh
      name="pump_Rotor"
      geometry={nodes.pump_Rotor.geometry}
      material={materials.PaletteMaterial025}
      position={[0, 0.061, 0]}
     >
      <mesh
       name="Buble"
       geometry={nodes.Buble.geometry}
       material={materials.PaletteMaterial024}
       position={[-0.006, 0.006, -0.001]}
      />
     </mesh>
    </group>
    <mesh
     name="Radiator"
     geometry={nodes.Radiator.geometry}
     material={materials["Material.066"]}
     position={[0.12, 0.243, -0.075]}
     rotation={[Math.PI / 2, -Math.PI / 2, 0]}
    />
    <group name="Toughpower" position={[-0.16, 0.075, 0.015]}>
     <mesh
      name="29113988013"
      geometry={nodes["29113988013"].geometry}
      material={materials["Gehäuse_grau.Stecker"]}
     />
     <mesh
      name="29113988013_1"
      geometry={nodes["29113988013_1"].geometry}
      material={materials["Gehäuse_grau.Stecker.rOT"]}
     />
     <mesh
      name="29113988013_2"
      geometry={nodes["29113988013_2"].geometry}
      material={materials["Gehäuse_grau.Front"]}
     />
     <mesh
      name="29113988013_3"
      geometry={nodes["29113988013_3"].geometry}
      material={materials.PaletteMaterial027}
     />
     <mesh
      name="29113988013_4"
      geometry={nodes["29113988013_4"].geometry}
      material={materials["Gehäuse_grau.Folie"]}
     />
     <mesh
      name="29113988013_5"
      geometry={nodes["29113988013_5"].geometry}
      material={materials["Gehäuse_grau.Stecker.metal"]}
     />
     <mesh
      name="29113988013_6"
      geometry={nodes["29113988013_6"].geometry}
      material={materials.Platine_lehr}
     />
     <mesh
      name="29113988013_7"
      geometry={nodes["29113988013_7"].geometry}
      material={materials["Material.018"]}
     />
     <mesh
      name="29113988013_8"
      geometry={nodes["29113988013_8"].geometry}
      material={materials["23700007.002"]}
     />
     <mesh
      name="29113988013_9"
      geometry={nodes["29113988013_9"].geometry}
      material={materials["RGB.003"]}
     />
     <mesh
      name="29113988013_10"
      geometry={nodes["29113988013_10"].geometry}
      material={materials["29113991.002"]}
     />
     <mesh
      name="29113988013_11"
      geometry={nodes["29113988013_11"].geometry}
      material={materials.PaletteMaterial026}
     />
     <mesh
      name="29113988013_12"
      geometry={nodes["29113988013_12"].geometry}
      material={materials.PaletteMaterial028}
     />
     <mesh
      name="29113988013_13"
      geometry={nodes["29113988013_13"].geometry}
      material={materials.PaletteMaterial029}
     />
     <mesh
      name="FANThermaltake"
      geometry={nodes.FANThermaltake.geometry}
      material={materials.PaletteMaterial026}
      position={[0.001, 0.08, 0]}
     />
    </group>
   </group>
  </group>
 );
}

useGLTF.preload("/Computer.glb");
