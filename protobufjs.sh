#!/bin/bash

LIBRA_DIR="../libra/"

yarn run pbjs \
    --target static-module \
    --wrap commonjs \
    --out "src/libra-protobuf.js" \
    --path "${LIBRA_DIR}types/src/proto/" \
    --path "${LIBRA_DIR}mempool/src/proto/shared/" \
    --path "${LIBRA_DIR}admission_control/admission_control_proto/src/proto/" \
    "admission_control.proto"

yarn run pbts \
    -o "src/libra-protobuf.d.ts" \
    "src/libra-protobuf.js"