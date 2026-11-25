# Editor surface

Mode: Operate. User selected Label studio in the visual direction chooser. Build is code-led.

## Direction contract

THESIS: Artwork editing leads; protocol evidence lives next to export without turning the editor into a diagnostic dashboard.

OWN-WORLD: A forest-green rail, pale green work surface, clean white property panel and warm orange default artwork. Standard editor controls use one sans family, consistent 8px controls and 14px rounded panels.

STORY: Add and arrange independent image, text and sticker layers, inspect the circular proof, save locally, export or review a still-image upload. Connect in place; diagnostics remain optional manual navigation. Upload review freezes the prepared bytes before connection. Distinguish local validation, simulation, device-confirmed completion, and optional diagnostic readback.

FIRST VIEWPORT: 80px header, 216px navigation, a large circular badge in the left work area and a 300px property panel on the right. Add image/Add text/Add sticker and Undo/Redo share the toolbar. There are no editing tabs or inspiration section. The Layers list and contextual properties share a bounded desktop pane; on mobile they flow below the canvas. Save, export and upload sit along the bottom. The decoded RGB565 preview is the signature comparison.

FORM: Woven label/sample-book palette and density, grounded candidate 3, seed 6fd58dfb. The chosen HTML sketch is `.impeccable/mocks/decision/assigned.html`.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance. Current Layers captures are `.impeccable/review/layers/{desktop,mobile,mobile-controls,hit-bounds}.jpg`. `upload-complete.jpg` shows default simulator completion before the later hit-test/scroll fixes; earlier base-editor captures do not represent this extension.

## Unified Layers extension

Images, text and stickers are independent elements. Raster images are embedded data; stickers become embedded PNG layers without flattening other elements. Projects retain editable layers. Select from the top-first layer list or the canvas, drag, or use 1px arrow nudges (10px with Shift). Visibility, opacity, size, position, rotation, text/color, duplicate/delete, move up/down and raster replacement live in one contextual panel. A legacy Base image and Background remain selectable. Selection outlines appear only in the editor and are excluded from exported images/resources and upload review. Desktop properties scroll within viewport bounds; mobile properties follow the canvas. Raster canvas selection uses cached natural-image dimensions to match the drawn aspect-ratio bounds, including rotated space. Undo that removes the selected element returns selection to Background. Visibility labels retain 44px hit targets.

## In-place connection

Header **Connect badge** connects on the current screen; while connecting, the disabled control reads **Connecting…**. A connected header offers **Disconnect badge** or **Disconnect simulator** without changing screens. Footer **Connect to upload** validates and snapshots the current resource, connects in Artwork, and opens the same upload preview. Diagnostics navigation is manual and optional.

## Still-image upload

The green primary action opens a white native preview dialog with a 16px radius, forest backdrop, circular decoded snapshot, TEST.RES metadata and fingerprints. Direct upload follows valid resource and connection; no acknowledgment or pre-upload backup/persistence/download is part of the flow. Busy state prevents dismissal and exposes progress, cancellation and device-completion status.

Default success is **Image uploaded** / **Badge confirmed upload** after full byte coverage and successful device completion. Simulation clearly reports **Simulation complete** with no physical change. Optional diagnostic `verifyReadback` may produce verified copy only if its byte comparison passes; ordinary upload sends no `0x0C`/`0x24` readback commands. The owner reports an image uploaded and displayed; independent physical byte verification remains unproven. Failure/cancellation never promises rollback or interruption recovery. Animated uploads remain unavailable.

## Final review evidence

The finish review identified one raster-selection bounds finding. It was fixed with aspect-ratio bounds, focused regression tests, and a browser check in which a click outside a wide attention sticker selected the underlying text. The same fresh reviewer marked finding 1 **RESOLVED**, remaining items clear, and returned **SHIP** scoped to that selection fix. This is not a new full review or independent hardware QA. The final implementation passed 85 tests / 1000 assertions, typecheck, and build.
