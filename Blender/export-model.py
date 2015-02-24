import bpy
for item in bpy.data.objects:
           if item.name == 'Cube' and item.type == 'MESH' :
              for face in item.data.polygons: 
                  verts_in_face = face.vertices[:]
                  print("face index ", face.index)
                  for vert in face.vertices:
                      print("Vertices in face:",len(verts_in_face))
                      print("Vertex(x,y,z) ", item.data.vertices[vert].co)
