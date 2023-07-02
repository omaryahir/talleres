
# Kubernetes

## minikube

https://github.com/kubernetes/minikube

### Creating a new kubernetes cluster:

Some examples:

$ minikube start --driver=virtualbox
$ minikube start -p my-new-cluster-1 --driver=virtualbox
$ minikube start -p my-new-cluster-1 --drive=docker 
$ minikube start -p my-new-cluster-1 # in my first try it used docker

https://minikube.sigs.k8s.io/docs/commands/start/


### Check profiles

$ minikube profile list
|----------|-----------|---------|--------------|------|---------|---------|-------|--------|
| Profile  | VM Driver | Runtime |      IP      | Port | Version | Status  | Nodes | Active |
|----------|-----------|---------|--------------|------|---------|---------|-------|--------|
| platzi-1 | docker    | docker  | 192.168.49.2 | 8443 | v1.26.3 | Running |     1 |        |
|----------|-----------|---------|--------------|------|---------|---------|-------|--------|

https://minikube.sigs.k8s.io/docs/commands/profile/


### Delete a profile

$ minikube delete -p my-new-cluster-1
- Deleting "platzi-1" in docker ...
- Deleting container "my-new-cluster-1" ...
- Removing /Users/omaryahir/.minikube/machines/my-new-cluster-1 ...
- Removed all traces of the "my-new-cluster-1" cluster.

https://minikube.sigs.k8s.io/docs/commands/delete/





